#include <stdio.h>
#include <stdlib.h>
#include <X11/X.h>
#include <X11/Xlib.h>
#include <GL/gl.h>
#include <GL/glx.h>

void desenhaMinhaCena()
{
    glClearColor(1, 1, 1, 1);
    glClear(GL_COLOR_BUFFER_BIT);

    // desenha um quadrado
    glColor3f(0, 1, 0);
    glBegin(GL_TRIANGLE_FAN);
        glVertex3f(-0.5, -0.5, 0.0);
        glVertex3f( 0.5, -0.5, 0.0);
        glVertex3f( 0.5,  0.5, 0.0);
        glVertex3f(-0.5,  0.5, 0.0);
    glEnd();
    glFlush();
}

int main(int argc, char *argv[]) {
    Display *display;
    Window root;
    GLint configuration[] = { GLX_RGBA, GLX_DEPTH_SIZE, 24, GLX_DOUBLEBUFFER, None };
    XVisualInfo *vi;
    Colormap colormap;
    XSetWindowAttributes swa;
    Window win;
    GLXContext context;
    XWindowAttributes gwa;
    XEvent event;

    display = XOpenDisplay(NULL);

    if (display == NULL) {
        printf("Erro ao conectar ao X server\n");
        exit(-1);
    }

    root = DefaultRootWindow(display);
    vi = glXChooseVisual(display, 0, configuration);

    if(vi == NULL) {
        printf("Não foi possível escolher as configurações\n");
        exit(-1);
    }

    colormap = XCreateColormap(display, root, vi->visual, AllocNone);

    swa.colormap = colormap;
    swa.event_mask = ExposureMask | KeyPressMask;

    win = XCreateWindow(
      display,
      root,
      0, 0,
      500, 500,
      0,
      vi->depth,
      InputOutput,
      vi->visual,
      CWColormap | CWEventMask,
      &swa);

    XMapWindow(display, win);
    XStoreName(display, win, "Hello World");

    context = glXCreateContext(display, vi, NULL, GL_TRUE);
    glXMakeCurrent(display, win, context);


    while (1) {
        XNextEvent(display, &event);

        switch (event.type) {
        case Expose:
            XGetWindowAttributes(display, win, &gwa);
            glViewport(0, 0, gwa.width, gwa.height);
            desenhaMinhaCena();
            glXSwapBuffers(display, win);
            break;

        case KeyPress:
            glXMakeCurrent(display, None, NULL);
            glXDestroyContext(display, context);
            XDestroyWindow(display, win);
            XCloseDisplay(display);
            exit(0);
            break;
        }
    }

    return 0;
}
