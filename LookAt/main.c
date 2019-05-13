#include <GL/glew.h>
#include <GL/freeglut.h>
#include <SOIL/SOIL.h>
#include <stdio.h>
#include <math.h>
#include <time.h>
#include <stdlib.h>
#include <string.h>


int xMouse=0, yMouse=0;        //variáveis globais que serão usadas na função posicionaCamera
int xCursor, yCursor, zCursor;//guarda o centro do cursor
int modoCAM=1;               //variável responsável por guardar o modo de câmera que está sendo utilizado
float phi=90, teta=0;       //ângulos das coordenadas esféricas

struct camera
{
float x, y, z;   //definindo a estrutura de dados que representará as coordenadas da câmera
}camera;


void teclado(unsigned char key, int x, int y) {//capturar quando uma tecla é pressionada
    switch (key) {
        case 27:    //aperte ESC para fechar
            exit(0);
            break;
        case 's':   //andar pelo plano X-Z utilizando W A S D
            xCursor++;
            break;
        case 'w':
            xCursor--;
            break;
        case 'a':
            zCursor++;
            break;
        case 'd':
            zCursor--;
            break;
        case '1':
            modoCAM=1; //aperte 1 para modo terceira pessoa
            break;
        case '2':
            modoCAM=2;//aperte 2 para modo primeira pessoa
            break;
        case '3':
            modoCAM=3;//aperte 3 para câmera simples
        default:
            break;
    }
}

void posicionaCamera(int x, int y){//capturar posicionamento do mouse
  double xChange; double yChange; //variáveis que guardam o vetor 2D de movimento do mouse na tela
    xChange= x- xMouse;          //xMouse e yMouse são os valores de x e y no frame anterior
    yChange= y- yMouse;

    teta= (teta+ xChange/150);//nesse exemplo, usarei coordenadas esféricas para controlar a câmera, assim, ficará mais fácil de enxergar
    phi= (phi- yChange/150); //teta e phi guardam a conversão do vetor 2D para um espaço 3D com coordenada esférica

    if(phi>=180){
      phi=180;  //limite de 180 para o phi
    }


    xMouse = x; //guardam o x e y do mouse para usar na comparação do próximo frame
    yMouse = y;

    glutPostRedisplay(); //redisplay ao movimentar, evitando lag quando o usuário movimentar muito rapidamente a câmera
}

void frame(int time){//função que tratará a taxa de atualização, nesse caso, próximo de 60fps (1000/16 = 62.5 fps)

    glutPostRedisplay();
    glutTimerFunc(time, frame, 10);
}

void redimensiona(int w, int h){//função que tratará o redimensionamento da tela

    glEnable(GL_DEPTH_TEST);                // Ativa o Z buffer
    glViewport (0, 0, w, h);               //define a proporção da janela de visualização
    glMatrixMode (GL_PROJECTION);         //define o tipo de matriz de transformação que será utilizada
    glLoadIdentity();                    //carrega a matriz identidade do tipo GL_PROJECTION configurado anteriormente
    gluPerspective(60.0, (float)w/(float)h, 0.2, 400.0);   //funciona como se fosse o glOrtho, mas para o espaço 3D
    glMatrixMode(GL_MODELVIEW);                           //ativa o modo de matriz de visualização para utilizar o LookAt
}

void inicializa(){
    glClearColor(1, 1, 1, 1);                            //cor de fundo branca
    glEnable(GL_BLEND);                                 //ativa a mesclagem de cores
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA); //ativando o blend, podemos criar objetos transparentes
    xCursor= 0;                                       //a câmera começa olhando para o ponto 0
    yCursor= 0;
    zCursor= 0;
}

void desenhaCena(){//função que desenhará tudo o que aparece na tela

    camera.x = 100*sin(phi)*cos(teta);  //coordenada x denotada em coordenadas esféricas
    camera.z = 100*sin(phi)*sin(teta); //coordenada z denotada em coordenadas esféricas
    camera.y = 100*cos(phi);          //coordenada y denotada em coordenadas esféricas
    //esfera de raio 100


     glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT); //limpa a tela com a cor definida e limpa o mapa de profundidade

    glLoadIdentity();  //carrega a matriz identidade do modelo de visualização, sempre utilize antes de usar LookAt


    switch(modoCAM){ //define um LookAt diferente para cada modo da câmera, veja abaixo o uso de cada um
        case 1:
            gluLookAt(xCursor+camera.x, camera.y, zCursor+camera.z,//câmera posicionada na casca da esfera calculada (terceira pessoa)
                xCursor+0, 0, zCursor+0,                          //centro da esfera, o ponto em que estamos olhando
                0, 1, 0);                                        //vetor UP, apontando para o eixo Y (para cima)
            break;
        case 2:
            gluLookAt( xCursor+0, 0, zCursor+0,                    //já aqui, a câmera está posicionada no centro da esfera
                xCursor+camera.x, camera.y, zCursor+camera.z,     //e a câmera estará olhando para a casca da esfera (primeira pessoa)
                0, 1, 0);                                        //vetor UP, apontando para o eixo Y (para cima)
            break;
        default:
            gluLookAt(0, 0, 200,   // Z=200
                      0, 0, 0,    // (0, 0, 0) origem do mundo
                      0, 1, 0);  //nesse exemplo mais simples, estamos no ponto Z=200 olhando para o ponto 0
            break;
    }

    glColor4f(0, 0, 0, 1);//começa a desenhar com a cor preta
    glutWireTeapot(50);  //desenha uma jarra em preto

    glPushMatrix();
    glColor4f(0.5, 0.5, 0.5, 1); //começa a desenhar com a cor cinza
    glTranslatef(0, -100, 0);   //desenha no ponto Y=-100 para parecer uma mesa para a jarra
    glutSolidCube(100);        //desenha um cubo no ponto (0, -100, 0)
    glColor4f(0, 0, 0, 1);    //começa a desenhar com a cor preta
    glutWireCube(105);       //desenha bordas de um cubo levemente maior
    glPopMatrix();

    glutSwapBuffers();     //SwapBuffers funciona como o Flush, mas para o modo de buffer duplo
}


int main(int argc, char *argv[]){

    glutInit(&argc, argv);                                        //passa parâmetros de entrada da execução para serem tratadas por padrão, pode ser ignorado, executaremos com MakeFile sem passar nenhum parâmetro
    glutInitContextVersion(1, 1);                                //versão do OpenGL utilizada (1.1)
    glutInitContextProfile(GLUT_COMPATIBILITY_PROFILE);         //confuguração do perfil de compatibilidade para aplicação das instruções do OpenGL utilizando as da GLUT

    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGBA | GLUT_DEPTH);  //configuração dos tipos de renderização para o que será mostrado
    glutInitWindowSize(1280, 720);                             //tamanho inicial da janela que será criada
    glutInitWindowPosition (0, 0);                            //posição inicial da janela na tela do usuário

    glutCreateWindow("Exemplo LookAt");  //nome que aparecerá na barra superior da janela e nas interações do sistema operacional
    //glutEnterGameMode();                //Fullscreen baby! (retire o comentário para ativar a tela cheia)
    glutSetCursor(GLUT_CURSOR_NONE);     //esconde o cursor do sistema


    glutDisplayFunc(desenhaCena);                   //função que desenhará tudo o que aparece na tela
    glutReshapeFunc(redimensiona);                 //função que tratará o redimensionamento da tela
    glutTimerFunc(10, frame, 10);                 //função que tratará a taxa de atualização, nesse caso, próximo de 60fps (1000/16 = 62.5 fps)

    glutKeyboardFunc(teclado);                    //capturar quando uma tecla é pressionada
    //glutMouseFunc(mouse);                        //capturar cliques do mouse (não utilizaremos nesse exemplo)
    glutPassiveMotionFunc(posicionaCamera);     //capturar posicionamento do mouse
    //glutKeyboardUpFunc(tecladoUP);             //capturar quando o usuário solta uma tecla (não utilizaremos nesse exemplo)


//___________________________________________________________
    inicializa();       //inicializar variáveis
    glutMainLoop();    //entra no loop da GLUT
}
