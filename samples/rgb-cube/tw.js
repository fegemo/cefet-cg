/* Helper functions for use in CS307.

GNU public license.

Scott D. Anderson
Summer 2014
*/

"use strict";

var TW = { REVISION: '27' };

var cs307 = TW; // a synonym, more likely to be unique

// mrdoob does this; I don't yet understand it
if( typeof module === 'object' ) {

    module.exports = cs307;

}

/* I'm not going to make any effort to create private instance variables
and such. */

// To turn on debugging output, set this:
TW.debug = false;

// ================================================================
// Colors. This is just a convenience. It would be nice to list all 140 standard colors, but ...

TW.WHITE   = 0xffffff;
TW.SILVER  = 0xc0c0c0;
TW.GRAY    = 0x808080;
TW.BLACK   = 0x000000;
TW.RED     = 0xff0000;
TW.MAROON  = 0x800000;
TW.LIME    = 0x00ff00;
TW.GREEN   = 0x008000;
TW.BLUE    = 0x0000ff;
TW.NAVY    = 0x000080;
TW.YELLOW  = 0xffff00;
TW.OLIVE   = 0x808000;
TW.FUCHSIA = 0xff00ff;
TW.MAGENTA = 0xff00ff; // synonym
TW.PURPLE  = 0x800080;
TW.AQUA    = 0x00ffff;
TW.CYAN    = 0x00ffff; // synonym
TW.TEAL    = 0x008080;
TW.ORANGE  = 0xffa500;

TW.makeColor = function(r,g,b,debug) {
    // Input values are in 0-1; return value is a 24-bit number.
    // debug arg is optional, defaults to false.
    // You can give the return value to THREE.js functions, as the value of
    // color, ambient, and specular.
    // to determine the hex code, just do val.toString(16).
    // You might have to add a leading zero.
    function unsignedByte(p) {
        if( 0 <= p && p <= 1 ) {
            return Math.round(p*255);
        }
        throw "primary not in [0,1]";
    }

    var intValue = 256*256*unsignedByte(r) + 256*unsignedByte(g) + unsignedByte(b);
    if( debug || TW.debug ) {
        var hexString = intValue.toString(16);
        if( hexString.length < 6 ) {
            hexString = "0" + hexString;
        }
        console.log("r: "+r+" g: "+g+" b: "+b+" hexString: 0x"+hexString+" int: "+intValue);
    }
    return intValue;
};


// ================================================================
// Keyboard callbacks.  We have an array that maps from a keycode to
// a function that is invoked.

TW.keyboard_callbacks = [];
TW.keyboard_callbacks_docs = [];

TW.setKeyboardCallback = function (charstring,callback,doc,shared) {
    /* Normally, keyboard callbacks depend on the canvas, so you should
     * call this after setting up the camera. If 'shared' is true, a
     * callback is set in the TW arrays that all canvases get a copy
     * of.

     This function takes three arguments, like this:

    TW.setKeyboardCallback("1",fred,"camera setup 1");

  <ul>
    <li>The first argument is a one-character string that defines the key
    you want to bind

    <li>The second argument is a function object. The system will invoke
    that function when the key is pressed.  Remember that if you give the
    name of a function, like <code>fred</code>, you will omit the parens,
    because you are not invoking <code>fred</code> now, the system will be
    invoking it later.

    <li>The third argument is the documentation string that is displayed
    if the user presses the question mark key (<code>?</code>) to show the
    available keyboard callbacks.

    <li>The optional fourth argument is whether to set this callback in a
    master list of shared callbacks or for a local list just for this
    canvas.  Default is false, which is just for this canvas.
  </ul>

  <p>You should set up keyboard callbacks after the canvas exists, which is
  done by <code>TW.mainInit()</code>.

    */
    var obj; // the object that has the two arrays
    if(TW.debug) {
        console.log("set kbd: "+charstring+","+(shared?"shared":"not-shared"));
    }
    if( shared ) {
        var obj = TW;
    } else {
        var obj = TW.lastClickTarget.TW_state;
    }
    var charCode = charstring.charCodeAt(0);
    obj.keyboard_callbacks[charCode] = callback
    obj.keyboard_callbacks_docs[charCode] = doc;
    // helpful for debugging; won't measurably impact performance
    obj.keyboard_callbacks[charstring] = doc + (shared?" shared":" not-shared");
};

TW.showKeyboardCallbacks = function () {
    var state = TW.lastClickTarget.TW_state;
    var i, list = state.keyboard_callbacks_docs, len = list.length;
    var msg = "Current keyboard callbacks:\n";
    for ( i=0; i < len; i++ ) {
        if( list[i] ) {
            msg += String.fromCharCode(i)+": "+list[i]+"\n";
        }
    }
    alert(msg);
};

TW.render = function () {
    var state = TW.lastClickTarget.TW_state;
    if( state.render ) {
        state.render();
    } else {
        console.log("No render function in the state object; \n"
                    + "This is defined by TW.cameraSetup().\n"
                    + "have you used it?");
    }
}

TW.toggleAxes = function (mode) {
    /* toggles the visibility of the axis helper. With an argument, "show"
     * turns it on, and "hide" turns it off. Note that because this is a
     * keyboard event handler, it will typically be invoked with a
     * keyboard event object as 'mode.' but we don't need that object. */
    var state = TW.lastClickTarget.TW_state;
    if( mode === "show" ) {
        state.axesHelper.visible = true;
    } else if( mode === "hide" ) {
        state.axesHelper.visible = false;
    } else {
        // this is the normal usage
        state.axesHelper.visible = ! state.axesHelper.visible;
    }
    state.render();
};

TW.toggleBoundingBox = function (mode) {
    /* toggles the visibility of the bounding box helper. With an argument, "show"
     * turns it on, and "hide" turns it off. Note that because this is a
     * keyboard event handler, it will typically be invoked with a
     * keyboard event object as 'mode.' but we don't need that object. */
    var state = TW.lastClickTarget.TW_state;
    if( mode === "show" ) {
        state.sceneBoundingBoxHelper.visible = true;
    } else if( mode === "hide" ) {
        state.sceneBoundingBoxHelper.visible = false;
    } else {
        // this is the normal usage
        state.sceneBoundingBoxHelper.visible = ! state.sceneBoundingBoxHelper.visible;
    }
    state.render();
};

TW.toggleGroundPlane = function (mode) {
    /* toggles the visibility of the ground plane, which shows the bottom
     * of the bounding box. With an argument, "show" turns it on, and
     * "hide" turns it off. Note that because this is a keyboard event
     * handler, it will typically be invoked with a keyboard event object
     * as 'mode.' but we don't need that object. */
    var state = TW.lastClickTarget.TW_state;
    if( mode === "show" ) {
        state.ground.visible = true;
    } else if( mode === "hide" ) {
        state.ground.visible = false;
    } else {
        // this is the normal usage
        state.ground.visible = ! state.ground.visible;
    }
    state.render();
};

/* Use the following function like this:

   document.addEventListener('keypress',TW.onkeypress);

   Note that you *must* add the event listener to the document, because a
   canvas is not focusable. Or, see the solution at the bottom of this file.

*/

TW.onkeypress = function (e) {
    if( ! TW.lastClickTarget ) return;
    var canvas = TW.lastClickTarget;
    var charCode = e.charCode;
    if( TW.debug ) {
        console.log("keypress: "+String.fromCharCode(charCode)+" on canvas id: "+canvas.id);
    }
    var map = canvas.TW_state.keyboard_callbacks;
    if( typeof map[charCode] === 'function' ) {
        map[charCode](e);
    }
};

// Got this from Jos Dirksen's code. Useful for turning some geometry into
// a mesh just for demo/debugging purposes.  Should probably have a more
// descriptive name, like createDemoMesh.

TW.createMesh = function (geom) {

    // assign two materials
    var meshMaterial = new THREE.MeshNormalMaterial();
    meshMaterial.side = THREE.DoubleSide;
    var wireFrameMat = new THREE.MeshBasicMaterial();
    wireFrameMat.wireframe = true;

    // create a multimaterial
    var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

    return mesh;
};

TW.makeSphereAt = function (pt,size) {
    var sph = TW.createMesh( new THREE.SphereGeometry(size || 1));
    sph.position.copy(pt);
    return sph;
};

// some useful utilities:

TW.degrees2radians = function (degrees) { return (Math.PI/180.0)*degrees; };

TW.radians2degrees = function (radians) { return (180.0/Math.PI)*radians; };

/* This computes the hypotenuse of a right triangle given an angle and the
length of the opposite side. This is useful for positioning a camera
relative to a scene given only the "radius" of the scene (the side length)
and the half of the field of view (fov) of the camera. I think this worked
perfectly in Python-tw, but it only *almost* works in THREE.js. I'm not
sure why, but it gets us close enough.  */

TW.hypotenuseOf = function (side, angle) {
    return side/Math.sin(angle);
};

// ================================================================

/* It's annoying to have to turn each quad face into triangles "by hand,"
 * so this does it for you. The first argument is a geometry object, and
 * the next four are indices for a quad face, CCW. */

TW.addQuadFace = function(geom,a,b,c,d) {
    geom.faces.push( new THREE.Face3(a,b,c) );
    geom.faces.push( new THREE.Face3(c,d,a) );
};

// ================================================================

TW.setMaterialForFaces = function(geom, materialIndex, faceIndexes) {
    /* Sets the material index for a list of faces, or all remaining
     * arguments. Very often, you want to say faces [1, 2, 3, 7, 8] are all
     * materialIndex M, and your code is five tedious assignment
     * statements. This simplifies that. You can either give M and a list of
     * face indexes, or all remaining arguments are the list of indexes.
     */

    var i, len, list;
    var faces = geom.faces;
    if( faceIndexes instanceof Array ) {
        // last arg is an array, so iterate over all of it
        list = faceIndexes;
        i = 0;
    } else if( typeof faceIndexes === 'number' ) {
        // it's just the first of many, so use the magic arguments list
        // but skip the first two arguments
        list = arguments;
        i = 2;
    } else {
        throw "faceIndexes must be a list or the first of some numbers";
    }
    // from here on, we just iterate over 'list' starting at 'i'
    len = list.length;
    for( ; i < len; ++i ) {
        var faceIndex = list[i];
        if( TW.debug ) {
            console.log("setting face "+faceIndex+" to material "+materialIndex);
        }
        faces[faceIndex].materialIndex = materialIndex;
    }
}

TW.setMaterialForFaces11 = function(geom) {
    // Sets all face material indexes to the corresponding material, 1:1
    var i, len = geom.faces.length;
    for( i = 0; i < len; ++i ) {
        geom.faces[i].materialIndex = i;
    }
};

TW.randomColor = function () {
    // Returns a randomly generated color
    return new THREE.Color( Math.random(), Math.random(), Math.random() );
};

// ================================================================

TW.computeFaceColors = function (geom) {
    /* When color interpolation happens with a geometry, each face needs a
     * three-place array of colors, where element zero is the color of vertex
     * a, element 1 is the color of vertex b and element 2 is the color of
     * vertex c. I'm amazed that this isn't built-into THREE, but maybe I
     * overlooked it. */
    // This implementation may be completely erroneous. I no longer think
    // that there's a vertexColors attribute of a Geometry. However, you can
    // always make one, as I did with the color cube.
    if( ! (geom instanceof THREE.Geometry) ) {
        throw "TW.computeFaceColors needs a geometry object";
    }
    var colors = geom.vertexColors;
    var i, faces = geom.faces, len = faces.length;

    for( i = 0 ; i < len; ++i ) {
        var face = faces[i];
        var facecolors = [];
        facecolors[0] = colors[face.a];
        facecolors[1] = colors[face.b];
        facecolors[2] = colors[face.c];
        face.vertexColors = facecolors;
    }
}

// ================================================================
// Various setup functions

// Adds an AxesHelper with given dimensions to the scene. It's initially
// invisible.

TW.addAxesHelper = function (scene, lineLength, lineWidth ) {
    var state = TW.lastClickTarget.TW_state;
    var ah = new THREE.AxesHelper( lineLength );
    ah.material.linewidth = lineWidth;
    ah.name = "AxesHelper";
    ah.visible = false;
    scene.add(ah);
    state.axesHelper = ah;
};

TW.sceneBoundingBoxColor = TW.YELLOW;

// This function creates a bounding box that the user set up the camera with.
// A keyboard callback can toggle its visibility.

TW.addSceneBoundingBoxHelper = function (scene) {
    var color = TW.sceneBoundingBoxColor;
    var bbh = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ),
                              new THREE.MeshBasicMaterial( { color: color,
                                                             wireframe: true }));
    var state = TW.lastClickTarget.TW_state;
    var cam = state.cameraParams;
    bbh.scale.set(cam.xSize, cam.ySize, cam.zSize);
    bbh.position.copy(cam.center);
    bbh.visible = false;        // initially invisible
    bbh.name = "BoundingBoxHelper";
    scene.add(bbh);
    state.sceneBoundingBoxHelper = bbh;
};

TW.groundColor = 0x008000;

TW.addGroundHelper = function (scene,bb) {
    // Add the ground mesh to the scene, though initially invisible
    var groundGeom = new THREE.PlaneGeometry(bb.maxx-bb.minx, bb.maxz-bb.minz);
    var groundMat = new THREE.MeshBasicMaterial( { color: TW.groundColor, side: THREE.DoubleSide} );
    var ground = new THREE.Mesh( groundGeom, groundMat );
    ground.position.set(0.5*(bb.maxx+bb.minx), bb.miny, 0.5*(bb.maxz+bb.minz));
    ground.rotation.x = -0.5*Math.PI;
    ground.visible = false;
    ground.name = "Ground";
    scene.add(ground);
    var state = TW.lastClickTarget.TW_state;
    state.ground = ground;
};

// ================================================================
// main initialization

// ================================================================
// View from various locations:

// Sets the camera to look at the scene from +Z relative to it.

TW.viewFromFront = function () {
    var state = TW.lastClickTarget.TW_state;
    var cam = state.cameraParams;
    var center = cam.center;
    state.cameraObject.position.set(center.x, center.y, center.z + cam.cameraRadius);
    state.cameraObject.lookAt(center);
    state.render();
}

// Sets the camera to look at the scene from +X relative to it.

TW.viewFromSide = function () {
    var state = TW.lastClickTarget.TW_state;
    var cam = state.cameraParams;
    var center = cam.center;
    state.cameraObject.position.set(center.x + cam.cameraRadius, center.y, center.z);
    state.cameraObject.lookAt(center);
    state.render();
}

// Sets the camera to look at the scene from +Y relative to it.

TW.viewFromAbove = function () {
    var state = TW.lastClickTarget.TW_state;
    var cam = state.cameraParams;
    var center = cam.center;
    state.cameraObject.position.set(center.x, center.y + cam.cameraRadius, center.z);
    state.cameraObject.lookAt(center);
    state.render();
}

// Sets the camera to look at the scene from +XYZ relative to it.

TW.viewFromAboveFrontSide = function () {
    var state = TW.lastClickTarget.TW_state;
    var cam = state.cameraParams;
    var center = cam.center;
    var radius = cam.cameraRadius;
    var dist = radius / Math.sqrt(3);
    state.cameraObject.position.set(center.x + dist, center.y + dist, center.z + dist);
    state.cameraObject.lookAt(center);
    state.render();
}

// ================================================================

// The color that the canvas is cleared to, in camera setup. A light gray

TW.clearColor = 0xffffff;

// ================================================================

TW.mainInit = function(renderer,scene,inits) {
    /* Initializes the TW stuff for a canvas. Adds the canvas to the
     * document, defaulting to the end of the body, but you can also give
     * a parent element by putting {parentID: <id_string>} in the inits
     * object. This function also sets up keyboard callbacks, */
    if( ! renderer instanceof THREE.WebGLRenderer ) {
        throw "first argument doesn't seem to be a renderer: "+renderer;
    }
    if( ! scene instanceof THREE.Scene ) {
        throw "second argument doesn't seem to be a scene: "+scene;
    }
    if( ! ( renderer && renderer.domElement && renderer.domElement.nodeName === "CANVAS" ) ) {
        console.log("couldn't find canvas in renderer");
        return;
    }
    if( typeof inits === "undefined" ) {
        inits = {};
    }
    var canvas = renderer.domElement;
    // Other methods in the script element that invoked mainInit can get
    // the state from the canvas stored here. For example, cameraSetup
    TW.lastClickTarget = canvas;
    var state = {};
    canvas.TW_state = state;
    state.renderer = renderer;  // save this so that others can use it.
    state.scene = scene;        // save this so that others can use it.
    //
    if( inits.parentID ) {
        inits.parent = document.getElementById(inits.parentID);
    }
    var parent = inits.parent || document.body;
    parent.appendChild(canvas);
    renderer.setSize(canvas.clientWidth,canvas.clientHeight);
    renderer.setClearColor( TW.clearColor, 1);
    // Add the axis helper, with nice thick lines
    var axisLength = inits.axisLength || 20;
    TW.addAxesHelper(scene, axisLength, 5);
    // set up local copy of shared keyboard callbacks
    state.keyboard_callbacks = TW.keyboard_callbacks.slice(0); // copy the callbacks array.
    state.keyboard_callbacks_docs = TW.keyboard_callbacks_docs.slice(0); // and the doc
};

// ================================================================

TW.isValidBB = function (bb) {
    // true if the bounding box has the necessary properties, all numbers, and min < max
    return ( typeof bb.minx === "number" &&
             typeof bb.miny === "number" &&
             typeof bb.minz === "number" &&
             typeof bb.maxx === "number" &&
             typeof bb.maxy === "number" &&
             typeof bb.maxz === "number" &&
             bb.minx <= bb. maxx &&
             bb.miny <= bb. maxy &&
             bb.minz <= bb. maxz );
}

TW.cameraSetupParams = function (sceneBoundingBox, fovy) {
    // Return an object with a bunch of properties useful for setting up a
    // camera that can orbit around a scene without cutting through it.
    // The essential values are cameraRadius, near, and far, but a bunch
    // of other values are computed, too. See the source code for the
    // complete list.
    if( ! TW.isValidBB(sceneBoundingBox) ) {
        throw "first arg is not a valid bounding box";
    }
    if( ! fovy || isNaN(fovy) )
        throw 'fovy is missing or invalid: '+fovy;
    var sbb = sceneBoundingBox;
    var xSize = sbb.maxx - sbb.minx;
    var ySize = sbb.maxy - sbb.miny;
    var zSize = sbb.maxz - sbb.minz;
    var diameter = Math.sqrt(xSize*xSize+
                             ySize*ySize+
                             zSize*zSize);
    var sr = diameter/2;          // scene radius
    var fovyRadians = TW.degrees2radians(fovy);
    var cr = sr/Math.sin(fovyRadians/2); // camera radius
    var result = {xSize: xSize,
                  ySize: ySize,
                  zSize: zSize,
                  center: new THREE.Vector3( 0.5*(sbb.maxx + sbb.minx),
                                             0.5*(sbb.maxy + sbb.miny),
                                             0.5*(sbb.maxz + sbb.minz) ),
                  fovyRadians: fovyRadians,
                  sceneDiameter: diameter,
                  sceneRadius: sr,
                  cameraRadius: cr,
                  near: cr-sr,
                  far: cr+sr};
    return result;
};

TW.cameraSetup = function (renderer,scene,scene_bb,inits) {
    /* Sets up a camera for you, based on a scene bounding box (scene_bb),
     * an object with six properties: minx, maxx, miny, maxy, minz,
     * maxz. See cameraSetupParams for more. inits can include fovy */
    if( ! (renderer instanceof THREE.WebGLRenderer ) ) {
        throw "first arg should be a renderer, probably THREE.WebGLRenderer";
    }
    if( ! (scene instanceof THREE.Scene ) ) {
        throw "second arg must be a THREE.Scene";
    }
    var bb = scene_bb;
    if( ! bb ) {
        console.log("without the scene bounding box, I have no idea where to position the camera.\n"+
                    "Please supply a bounding box like {minx: 0, maxx: 100, ...}");
    }
    var fovy = inits && inits.fovy ? inits.fovy : 75;  // default fovy is 75
    if( TW.lastClickTarget === null ) {
        console.warn("It seems that you did not invoke TW.mainInit; doing it for you.");
        TW.mainInit(renderer,scene);
    }
    var canvas = TW.lastClickTarget;
    var state = canvas.TW_state;
    state.sceneBoundingBox = scene_bb;
    var camParams = TW.cameraSetupParams(scene_bb,fovy);
    state.cameraParams = camParams;
    var camera = new THREE.PerspectiveCamera(fovy, canvas.clientWidth/canvas.clientHeight,
                                             0.5 * camParams.near,
                                             2.0 * camParams.far);
    state.cameraObject = camera
    scene.add(camera);

    // adjust size of axesHelper to sceneRadius
    // TODO: position the axesHelper at center of scene, in case origin is off-screen
    var ah = scene.getObjectByName("AxesHelper");
    if( ah == null ) {
        throw("Your scene has no AxesHelper, which means it wasn't created by "
                    +"TW.mainInit()." );
    }
    ah.size = camParams.sceneRadius;
    TW.addSceneBoundingBoxHelper(scene);
    TW.addGroundHelper(scene,bb);

    state.render = function () { renderer.render(scene, camera); }

    /* If the user loads the OrbitControls, we'll use it and anytime it
     * changes, we render the scene, which uses our perspective camera,
     * above. */
    if( typeof THREE.OrbitControls === "function" ) {
        var cameraControls = new THREE.OrbitControls(camera, canvas);
        state.cameraControls = cameraControls;
        cameraControls.addEventListener('change',state.render);
        cameraControls.target.copy( camParams.center );
        cameraControls.update();
    }

    TW.viewFromFront();
    state.render();
    return state;
};

// A synonym, with a more ambiguous name.

TW.camera = function () {
    console.log("TW.camera is obsolete. Please use TW.cameraSetup instead.");
    TW.cameraSetup.apply(this, arguments);
};

// ================================================================
/* The following are used for various examples and are not part of the
 "core" TW functions, but it's useful to have them in this file so that
 (1) I don't have to remember to load another different file when I want
 to use one, and (2) if someone is interested in the code, they only have
 one file to look at.  It is nice to have them in a separate file if I
 want to load that file into a PRE environment, but now I've learned how
 to use "eval" and "toString()" to put the source code of a function
 directly into the document from the .js file.  See handle_code_jsfunction
 in 307.js.  */

// Create the geometry of a barn, given width, height and length (depth).

TW.createBarn = function(width, height, length) {
    var w = width, h = height, len = length;
    var barnGeometry = new THREE.Geometry();
    // add the front
    barnGeometry.vertices.push(new THREE.Vector3(0, 0, 0)); // vertex 0
    barnGeometry.vertices.push(new THREE.Vector3(w, 0, 0)); // vertex 1
    barnGeometry.vertices.push(new THREE.Vector3(w, h, 0)); // vertex 2
    barnGeometry.vertices.push(new THREE.Vector3(0, h, 0)); // vertex 3
    barnGeometry.vertices.push(new THREE.Vector3(0.5 * w, h + 0.5 * w, 0)); // 4

    // just add the back also manually
    barnGeometry.vertices.push(new THREE.Vector3(0, 0, -len)); // vertex 5
    barnGeometry.vertices.push(new THREE.Vector3(w, 0, -len)); // vertex 6
    barnGeometry.vertices.push(new THREE.Vector3(w, h, -len)); // vertex 7
    barnGeometry.vertices.push(new THREE.Vector3(0, h, -len)); // vertex 8
    barnGeometry.vertices.push(new THREE.Vector3(0.5 * w, h + 0.5 * w, -len)); // 9

    // now that we've got the vertices we need to define the faces.
    // front faces
    barnGeometry.faces.push(new THREE.Face3(0, 1, 2)); // 0
    barnGeometry.faces.push(new THREE.Face3(0, 2, 3));
    barnGeometry.faces.push(new THREE.Face3(3, 2, 4));

    // back faces
    barnGeometry.faces.push(new THREE.Face3(5, 7, 6)); // 3
    barnGeometry.faces.push(new THREE.Face3(5, 8, 7));
    barnGeometry.faces.push(new THREE.Face3(7, 8, 9));

    // roof faces.
    barnGeometry.faces.push(new THREE.Face3(3, 4, 8)); // 6
    barnGeometry.faces.push(new THREE.Face3(4, 9, 8));
    barnGeometry.faces.push(new THREE.Face3(2, 7, 9)); // 8
    barnGeometry.faces.push(new THREE.Face3(4, 2, 9));

    // side faces
    barnGeometry.faces.push(new THREE.Face3(6, 2, 1)); // 10
    barnGeometry.faces.push(new THREE.Face3(7, 2, 6));
    barnGeometry.faces.push(new THREE.Face3(0, 3, 5)); // 12
    barnGeometry.faces.push(new THREE.Face3(3, 8, 5));

    // floor faces
    barnGeometry.faces.push(new THREE.Face3(0, 5, 1)); // 14
    barnGeometry.faces.push(new THREE.Face3(5, 6, 1));

    // calculate the normals for shading
    barnGeometry.computeFaceNormals();
    // barnGeometry.computeVertexNormals(true); only for "rounded" objects

    return barnGeometry;
};

TW.createWireBarn = function(width, height, length, lineWidth) {
    /* Returns a mesh that is a wireframe barn, with lines parallel with Y
       being green, lines parallel with Z being blue, and the rest red.
       The barn's origin is marked with a white sphere.
    */
    var w = width, h = height, len = length;
    var lw = lineWidth || 3;    // default line width is 3px
    // some temporary vertices
    var verts = [];
    // add the front
    verts[0] = (new THREE.Vector3(0, 0, 0));
    verts[1] = (new THREE.Vector3(w, 0, 0));
    verts[2] = (new THREE.Vector3(w, h, 0));
    verts[3] = (new THREE.Vector3(0, h, 0));
    verts[4] = (new THREE.Vector3(0.5 * w, h + 0.5 * w, 0));

    // just add the back also manually
    verts[5] = (new THREE.Vector3(0, 0, -len));
    verts[6] = (new THREE.Vector3(w, 0, -len));
    verts[7] = (new THREE.Vector3(w, h, -len));
    verts[8] = (new THREE.Vector3(0, h, -len));
    verts[9] = (new THREE.Vector3(0.5 * w, h + 0.5 * w, -len));

    var geometry = new THREE.Geometry();

    // Now, each vertex gets a color
    function addLine(a, b, hex) {
        addPoint(a, hex);
        addPoint(b, hex);
    }

    function addPoint(a, hex) {
        var v = new THREE.Vector3();
        v.copy(verts[a]);
        geometry.vertices.push(v);
        geometry.colors.push( new THREE.Color( hex ) );
    }

    // colors
    var red = 0xff0000;
    var green = 0x00ff00;
    var blue = 0x0000ff;

    addLine(0,1,red);
    addLine(2,3,red);
    addLine(3,4,red);
    addLine(4,2,red);
    addLine(5,6,red);
    addLine(7,8,red);
    addLine(8,9,red);
    addLine(9,7,red);

    addLine(1,2,green);
    addLine(3,0,green);
    addLine(5,8,green);
    addLine(6,7,green);

    addLine(0,5,blue);
    addLine(1,6,blue);
    addLine(2,7,blue);
    addLine(3,8,blue);
    addLine(4,9,blue);

    var mat = new THREE.LineBasicMaterial( {color: 0xffffff,
                                            vertexColors: THREE.FaceColors,
                                           linewidth: lw});
    var barnObj = new THREE.LineSegments( geometry, mat );

    var parent = new THREE.Object3D();
    parent.add(barnObj);
    var origin = new THREE.Mesh( new THREE.SphereGeometry(0.4,8,8),
                                 new THREE.MeshBasicMaterial({color:0xFFFFFF}));
    parent.add(origin);
    return parent;
};

TW.wireCube = function(color) {
    /* Simple function to create and return a solid-colored wireframe
       cube. Color can either be a color object or an argument to the
       THREE.Color constructor. Returns a mesh, suitable for adding to a
       scene.  */
    if( ! (color instanceof THREE.Color) ) {
        color = new THREE.Color(color);
    }
    var colorHex = color.getHex();
    // finally ready to create the colored barn
    var boxGeom = new THREE.BoxGeometry( 1, 1, 1 );
    var boxMat = new THREE.MeshBasicMaterial( { color: colorHex } );
    boxMat.wireframe = true;
    var boxMesh = new THREE.Mesh( boxGeom, boxMat );
    return boxMesh;
};


TW.createBarnSolidColor = function(width, height, depth, color) {
    /* Simple function to create and return a solid-colored barn. Args are
       the same as for createBarn, and the color can either be a color
       object or an argument to the THREE.Color constructor. Returns a
       mesh, suitable for adding to a scene.  */

    if( ! (color instanceof THREE.Color) ) {
        color = new THREE.Color(color);
    }
    var colorHex = color.getHex();
    console.log("barn color is "+colorHex);
    // finally ready to create the colored barn
    var barnGeometry = TW.createBarn( width, height, depth );
    var barnMaterial = new THREE.MeshBasicMaterial( { color: colorHex } );
    var barnMesh = new THREE.Mesh( barnGeometry, barnMaterial );
    return barnMesh;
};

/* Creates and returns a barn mesh with four colors, one for the ends
 * (front and back), one for the sides, one for the roof, and one for the
 * floor. */

TW.createBarnMultipleMaterials = function(width, height, length) {
    var barnGeometry = TW.createBarn(width, height, length);

    var endIndex = 0; // ends are front and back
    var sideIndex = 1;
    var roofIndex = 2;
    var floorIndex = 3;
    TW.setMaterialForFaces(barnGeometry, endIndex, 0, 1, 2, 3, 4, 5); // end faces
    TW.setMaterialForFaces(barnGeometry, roofIndex, 6, 7, 8, 9); // roof
    TW.setMaterialForFaces(barnGeometry, sideIndex, 10, 11, 12, 13); // sides
    TW.setMaterialForFaces(barnGeometry, floorIndex, 14, 15); // floor
    return barnGeometry;
};

// ================================================================

/* Returns a mesh for a color cube, ready to add to a scene. The cube is a
 * unit cube, with all vertices binary, so the origin is at the back,
 * lower left. Red axis corresponds to x, Green with y, and Blue with
 * z. */

TW.createColorCube = function () {
    /* I've thought of these vertex numbers in octal, with three bits
     * corresponding (right to left) to red, green, and blue.
       */
    var colors = [];
    colors[0] = new THREE.Color( 0, 0, 0 );
    colors[1] = new THREE.Color( 0, 0, 1 );
    colors[2] = new THREE.Color( 0, 1, 0 );
    colors[3] = new THREE.Color( 0, 1, 1 ); // green+blue
    colors[4] = new THREE.Color( 1, 0, 0 );
    colors[5] = new THREE.Color( 1, 0, 1 ); // red+blue
    colors[6] = new THREE.Color( 1, 1, 0 ); // red+green
    colors[7] = new THREE.Color( 1, 1, 1 );

    // the index is the decimal/octal equivalent of the three bits of the coords
    var vertices = [];
    vertices[0] = new THREE.Vector3( 0, 0, 0 );
    vertices[1] = new THREE.Vector3( 0, 0, 1 );
    vertices[2] = new THREE.Vector3( 0, 1, 0 );
    vertices[3] = new THREE.Vector3( 0, 1, 1 );
    vertices[4] = new THREE.Vector3( 1, 0, 0 );
    vertices[5] = new THREE.Vector3( 1, 0, 1 );
    vertices[6] = new THREE.Vector3( 1, 1, 0 );
    vertices[7] = new THREE.Vector3( 1, 1, 1 );

    var geom = new THREE.Geometry();
    geom.vertices = vertices;
    geom.vertexColors = colors;
    // front face is z=1, so just those vertices
    TW.addQuadFace(geom, 1, 5, 7, 3);
    // top face is y=1, so just those
    TW.addQuadFace(geom, 2, 3, 7, 6);
    TW.addQuadFace(geom, 0, 1, 3, 2);  // left face is x=0
    TW.addQuadFace(geom, 4, 6, 7, 5);  // right face, x=1
    TW.addQuadFace(geom, 0, 4, 5, 1);  // bottom face, y=0
    TW.addQuadFace(geom, 0, 2, 6, 4);  // back face, z=0

    TW.computeFaceColors(geom);

    var material = new THREE.MeshBasicMaterial(
        { vertexColors: THREE.VertexColors,
          side: THREE.DoubleSide, // in case we go inside the cube
        });
    var mesh = new THREE.Mesh(geom, material);
    return mesh;
};

// ================================================================

TW.createHSLPyramid = function (numWedges, apex) {
    /* creates and returns an HLS pyramid with the lightness axis
     * coinciding with the Z axis. The 'apex' parameter is either 0 or 1,
     * depending on which one you want, and the ``bottom'' of the pyramid
     * is at z=lightness=0.5. The numWedges tells you how many vertices
     * are around the bottom of the pyramid. */

    if( numWedges < 3 ) {
        throw "number of wedges for a pyramid must be at least 3";
    }

    var geom = new THREE.Geometry();
    geom.vertexColors = [];
    // First vertex is the apex
    geom.vertices.push(new THREE.Vector3(0,0,apex));
    geom.vertexColors.push( apex==0 ?
                            new THREE.Color( 0, 0, 0 ) : // black
                            new THREE.Color( 1, 1, 1 )   // white
                          );

    // Second vertex is the 50% gray point at the center of the base,
    // at (0,0) in the z=0.5 plane.
    geom.vertexColors.push( new THREE.Color( 0.5, 0.5, 0.5 ) );
    geom.vertices.push(new THREE.Vector3(0,0,0.5));

    // Build the base vertices first. w is the index of a vertex around
    // the perimeter of the pyramid's base
    var w;
    // Now, loop around the base, creating vertices and their colors.
    for( w = 0; w < numWedges; ++w ) {
        var hue = w/numWedges;
        var color = new THREE.Color();
        color.setHSL(hue, 1, 0.5);
        var radians = hue * 2 * Math.PI;
        var cos = Math.cos(radians);
        var sin = Math.sin(radians);
        geom.vertices.push( new THREE.Vector3(cos,sin,0.5) );
        geom.vertexColors.push( color );
    }
    // Next loop creates all but the last two faces. Loop from w=3
    // .. numWedges+1 and use w-1 as the previous vertex.
    var last = numWedges+1;
    for( w = 3; w <= last; ++w ) {
        // Notice that, to get the CCW direction, we have to switch the order of
        // w and w-1 in these two faces.

        // the face up to the apex, vertex index 0
        geom.faces.push( new THREE.Face3(0, w, w-1) );
        // the face in to the center, vertex index 1
        geom.faces.push( new THREE.Face3(1, w-1, w) );
    }
    // Finally, do the last wedge as a special case
    geom.faces.push( new THREE.Face3(0, 2, last) );
    geom.faces.push( new THREE.Face3(1, last, 2) );
    // Finish up the geometry object
    TW.computeFaceColors(geom);
    var material = new THREE.MeshBasicMaterial(
        { vertexColors: THREE.VertexColors,
          side: THREE.DoubleSide, // in case we go inside the pyramid
        });
    var mesh = new THREE.Mesh(geom, material);
    return mesh;
};

// A synonym, just in case.

TW.createHLSPyramid = TW.createHSLPyramid;

// ================================================================
// Printing a transformation matrix

TW.matrix4x4toString = function( matrix, epsilon ) {
    // returns a human-readable string representation of the 4x4 matrix
    // matrix can also be an Object3D, in which case its matrix is used
    // values less than epsilon in absolute value are rounded to zero.
    if( matrix instanceof THREE.Object3D ) {
        matrix = matrix.matrix;
    }
    var elts;
    if( matrix instanceof THREE.Matrix4 ) {
        elts = matrix.elements;
    }
    if( typeof epsilon === "undefined" ) {
        epsilon = 0.00001;
    }
    var len = elts.length;
    if( len != 16 ) {
        throw "should be called on a 4x4 matrix or an Object3D";
    }
    var bar = "|", spc = " ", ret = "\n";
    var result = "";
    var i=0;
    for( i = 0; i < len ; i += 4 ) {
        var a = Math.abs(elts[i+0]) < epsilon ? 0 : elts[i+0];
        var b = Math.abs(elts[i+1]) < epsilon ? 0 : elts[i+1];
        var c = Math.abs(elts[i+2]) < epsilon ? 0 : elts[i+2];
        var d = Math.abs(elts[i+3]) < epsilon ? 0 : elts[i+3];
        result += bar+spc+a+spc+b+spc+c+spc+d+spc+bar+ret;
    }
    return result;
};

THREE.Camera.prototype.showMatrix = function () {
    var m = this.matrix.elements;
    console.log("|"+m[0]+" "+m[1]+" "+m[2]+" "+m[3]+"|");
    console.log("|"+m[4]+" "+m[5]+" "+m[6]+" "+m[7]+"|");
    console.log("|"+m[8]+" "+m[9]+" "+m[10]+" "+m[11]+"|");
    console.log("|"+m[12]+" "+m[13]+" "+m[14]+" "+m[15]+"|");
};


// ================================================================
// Frustum visualization. The THREE.cameraHelper is annoying to use,
// because you have to render a scene with the camera in order for the
// helper to notice any change to the viewpoint of the camera. (Updates to
// shape are easy, though.)

TW.createFrustumFOV = function(fovy,aspectRatio,near,far) {
    var top = near * Math.tan(TW.degrees2radians(fovy)/2);
    var bottom = -top;
    var right = aspectRatio * top;
    var left = -right;
    if( TW.debug ) {
        console.log("camera:",fovy,aspectRatio,near,far);
        console.log("frustum:",right,left,top,bottom,near,far);
    }
    return TW.createFrustum(right,left,top,bottom,near,far);
};


TW.createFrustum = function(left,right,top,bottom,near,far) {
    /* returns a THREE.Line object representing a frustum, like a
     * camera. Position is at the origin, and args are just like in
     * OpenGL's glFrustum(). The near plane is drawn with red lines, and
     * the far with green, and blue lines connecting. */
    // I loosely modeled this code on the CameraHelper
    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial( { color: 0xffffff,
                                                  linewidth: 3,
                                                  vertexColors: THREE.FaceColors });

    // ratio by which far coordinates are larger than near
    var r = far/near;
    // three letter abbrevs: l/r for left/right, t/b for top/bottom, n/f for near/far
    var pointMap = {
        ltn: new THREE.Vector3(left,top,near),
        lbn: new THREE.Vector3(left,bottom,near),
        rbn: new THREE.Vector3(right,bottom,near),
        rtn: new THREE.Vector3(right,top,near),
        ltf: new THREE.Vector3(r*left,r*top,far),
        lbf: new THREE.Vector3(r*left,r*bottom,far),
        rbf: new THREE.Vector3(r*right,r*bottom,far),
        rtf: new THREE.Vector3(r*right,r*top,far)
    }

    function addLine(a,b,color) {
        // adds a line from a to b in given color
        addPoint(a,color);
        addPoint(b,color);
    }

    function addPoint(id,color) {
        var v = new THREE.Vector3();
        v.copy( pointMap[id] );
        geometry.vertices.push( v );
        geometry.colors.push( new THREE.Color( color ) );
    }

    addLine('ltn','lbn',TW.RED);
    addLine('lbn','rbn',TW.RED);
    addLine('rbn','rtn',TW.RED);
    addLine('rtn','ltn',TW.RED);

    addLine('ltf','lbf',TW.LIME);
    addLine('lbf','rbf',TW.LIME);
    addLine('rbf','rtf',TW.LIME);
    addLine('rtf','ltf',TW.LIME);

    addLine('ltf','ltn',TW.BLUE);
    addLine('lbf','lbn',TW.BLUE);
    addLine('rbf','rbn',TW.BLUE);
    addLine('rtf','rtn',TW.BLUE);

    var line = new THREE.Line( geometry, material, THREE.LinePieces );
    return line;
};

// ================================================================

TW.TeddyBearParams = function () {
    /* Returns an object with properties set for all the TeddyBear
       parameters.  You can change them before passing the object to
       TW.createTeddyBear.  Invoke this function with the 'new' operator,
       so that you get a fresh object each time.*/
    if( this == window || this == TW || this == undefined) {
        throw "I think you forgot to invoke TeddyBearParams with the 'new' operator";
    }
    this.wireframe = false;
    this.sphereDetail = 10;
    this.cylinderDetail = 10;
    this.nose = true;
    this.noseRadius = 0.5;
    this.noseRotation = TW.degrees2radians(10);
    this.ears = true;
    this.earRadius = 0.6;
    this.earScale = 0.5;
    this.earAngle = Math.PI/4;
    this.eyes = true;
    this.eyeRadius = 0.3;
    this.eyeAngleX = -Math.PI/6;
    this.eyeAngleY = +Math.PI/6;
    this.arms = true;
    this.armLength = 7;
    this.armRadiusTop = 1.5;
    this.armRadiusBottom = 1.2;
    this.legs = true;
    this.legRadiusTop = 1.8;
    this.legRadiusBottom = 1.4;
    this.legLength = 9;
    this.legRotationX = -TW.degrees2radians(60);
    this.legRotationZ = TW.degrees2radians(20);
    this.hipWidth = 2.5;
    this.hipHeight = -7;
    this.head = true;
    this.headRadius = 2;
    this.bodyRadius = 5;
    this.bodyScaleY = 2;
    this.bodyColor = "#D08050";
    this.headColor = "#B07040";
    this.bodyMaterial = new THREE.MeshBasicMaterial( {color: this.bodyColor} );
    this.headMaterial = new THREE.MeshBasicMaterial({color: this.headColor});
    this.blackMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
    return this;
};

TW.createTeddyBear = function(params) {
    /* Creates and returns the complete teddy bear, a mesh, with many
       attributes specified by params.  See TW.teddyBearParams for the
       complete list.  This function is long, but composed of
       reasonable-sized subfunctions. */
        var bear = new THREE.Object3D();
        // No default for these. You can replace these materials with
        // Lambert or Phong materials if you like.
        var bodyMaterial = params.bodyMaterial;
        var headMaterial = params.headMaterial;
        var blackMaterial = params.blackMaterial;
        var body = createBody(params);
        bear.add(body);
        if(params.head) {
            var head = createHead(params);
            var bs = params.bodyScaleY || 2;
            var br = params.bodyRadius || 3;
            var hr = params.headRadius || 1;
            // calculate position for the center of the head
            head.position.y = bs*br+hr;
            bear.add(head);
        }
        return bear; // end of function. Just local function definitions below

        function createNose(params) {
            var sd = params.sphereDetail || 10;
            var radius = params.noseRadius || 0.6;
            var noseGeometry = new THREE.SphereGeometry(radius,sd,sd);
            var noseMesh = new THREE.Mesh(noseGeometry, blackMaterial);
            noseMesh.name = "nose";
            return noseMesh;
        }

        function addNose(head,params) {
            /* adds a nose to the head. It's placed by creating a composite object
             * centered in the middle of the head, and positioning the nose at the
             * head radius on +Z, then rotating around X by a little. */
            var noseframe = new THREE.Object3D();
            var nose = createNose(params);
            var radius = params.headRadius || 2;
            nose.position.z = radius; // within the noseframe
            noseframe.add(nose);
            var angle = params.noseRotation || TW.degrees2radians(10);
            noseframe.rotation.x = angle;
            head.add(noseframe);
            return head;
        }

        function createEar(params) {
            // side is 1 (right) or -1 (left)
            var sd = params.sphereDetail || 10;
            var radius = params.earRadius || 0.6;
            var earGeometry = new THREE.SphereGeometry(radius,sd,sd);
            var ear = new THREE.Mesh(earGeometry, bodyMaterial);
            //Flattens the sphere to make it look more like a flat disk
            ear.scale.z = params.earScale || 0.5;
            return ear;
        }


        function addEar(head,params,side) {
            /* adds an ear to the head on the right (side=1) or left
             * (side=-1). The center of the ear is flush with the surface of the
             * head by moving it out by the radius, and rotating it around the z
             * axis to get it to the desired height. */
            var earframe = new THREE.Object3D();
            var ear = createEar(params);
            ear.name = (side == 1) ? "right ear" : "left ear";
            var radius = params.headRadius || 2;
            var angle = params.earAngle || Math.PI/4;
            ear.position.x = side * radius; // within the earframe
            earframe.rotation.z = side * angle;
            earframe.add(ear);
            head.add(earframe);
            return head;
        }

        function createEye(params) {
            var sd = params.sphereDetail || 10;
            var radius = params.eyeRadius || 0.3;
            var eyeGeometry = new THREE.SphereGeometry(radius,sd,sd);
            var eyeMesh = new THREE.Mesh(eyeGeometry, blackMaterial);
            return eyeMesh;
        }

        function addEye(head,params,side) {
            /* adds an eye to the head on the right (side=1) or left
             * (side=-1). The center of the eye is flush with the surface of the
             * head by moving it out along the z axis by the radius, and rotating
             * it around the x and then y axes to get it to the desired height. */
            var eyeframe = new THREE.Object3D();
            var eye = createEye(params);
            var radius = params.headRadius || 2;
            eye.position.z = radius; // within the eyeframe
            var angleX = params.eyeAngleX || -Math.PI/6;
            var angleY = params.eyeAngleY || Math.PI/6;
            eyeframe.rotation.x = angleX;
            eyeframe.rotation.y = side * angleY;
            eyeframe.name = (side == 1) ? "right eye" : "left eye";
            eyeframe.add(eye);
            head.add(eyeframe);
            return head;
        }

        function createHead(params) {
            /* Returns a teddy bear head object, with origin in the center, and
             * eyes on the +Z side of the head, and ears on the left (-X) and
             * right (+X) sides. */
            var head = new THREE.Object3D();

            var sd = params.sphereDetail || 10;
            var radius = params.headRadius || 2;
            var headGeometry = new THREE.SphereGeometry(radius, sd, sd);
            var headMesh = new THREE.Mesh(headGeometry, headMaterial);
            headMesh.name = "head";
            head.add(headMesh);
            if(params.nose) {
                addNose(head,params);
            }
            if(params.ears) {
                addEar(head,params,1);
                addEar(head,params,-1);
            }
            if(params.eyes) {
                addEye(head,params,1);
                addEye(head,params,-1);
            }
            return head;
        }

        function createLimb(radiusTop, radiusBottom, length, params) {
            /* returns an Object with the center at the top and the negative Y
             * axis running down the center. */
            var limb = new THREE.Object3D();
            var cd  = params.cylinderDetail || 10;
            // console.log("cd is "+cd);
            // Turns out there's an error in Three.js if cd is a non-integer
            var limbGeom = new THREE.CylinderGeometry(radiusTop,radiusBottom,length,cd);
            var limbMesh = new THREE.Mesh( limbGeom, headMaterial );
            limbMesh.position.y = -length/2;
            limb.add(limbMesh);
            return limb;
        }

        function addArm(bear,params,side) {
            /* adds an arm to the bear on the right (side=1) or left (side=-1). */
            var top = params.armRadiusTop || 0.7;
            var bot = params.armRadiusBottom || 0.6;
            var len = params.armLength || 5;
            var arm = createLimb(top,bot,len,params);
            var radius = params.bodyRadius || 3;
            var scale = params.bodyScaleY || 2;
            var sx = params.shoulderWidth  || radius * 0.5;
            var sy = params.shoulderHeight || scale * radius * 0.7;
            // console.log("adding arms at "+sx+","+sy);
            arm.position.set( side * sx, sy, 0 );
            arm.rotation.z = side * Math.PI/2;
            arm.name = (side == 1) ? "right arm" : "left arm";
            bear.add(arm);
        }

        function addLeg(bear,params,side) {
            /* adds a leg to the bear on the right (side=1) or left (side=-1). */
            var top = params.legRadiusTop || 0.7;
            var bot = params.legRadiusBottom || 0.6;
            var len = params.legLength || 5;
            var leg = createLimb(top,bot,len,params);
            leg.name = (side == 1 ? "right leg" : "left leg");
            var radius = params.bodyRadius || 3;
            var scale = params.bodyScaleY || 2;
            var hx = side * params.hipWidth  || side * radius * 0.5;
            var hy = params.hipHeight || scale * radius * -0.7;
            // console.log("adding "+leg.name+" at "+hx+","+hy);
            leg.position.set( hx, hy, 0 );
            // console.log("rotating to "+params.legRotationZ);
            leg.rotation.x = params.legRotationX;
            leg.rotation.z = side * params.legRotationZ;
            bear.add(leg);
        }


        function createBody(params) {
            var body = new THREE.Object3D();
            var radius = params.bodyRadius || 3;
            var sd = params.sphereDetail || 20;
            var bodyGeom = new THREE.SphereGeometry(radius,sd,sd);
            var bodyMesh = new THREE.Mesh(bodyGeom, bodyMaterial);
            var scale = params.bodyScaleY || 2;
            bodyMesh.scale.y = scale;
            body.add(bodyMesh);
            if(params.arms) {
                addArm(body,params,1);
                addArm(body,params,-1);
            }
            if(params.legs) {
                addLeg(body,params,1);
                addLeg(body,params,-1);
            }
            return body;
        }
    };


// ================================================================

TW.convertMousePositionToNDC = function (event) {
    var mx = event.clientX;
    var my = event.clientY;
    // console.log("click at ("+mx+","+my+")");
    var target = event.target;
    // console.log("clicked on "+target);
    var rect = target.getBoundingClientRect();
    var cx = mx - rect.left;
    var cy = my - rect.top;
    var winXSize = rect.width || (rect.right - rect.left);
    var winYSize = rect.height || (rect.bottom - rect.top);
    var winHalfXSize = winXSize/2;
    var winHalfYSize = winYSize/2;
    // these are in NDC
    var x = (cx - winHalfXSize) / winHalfXSize;
    var y = (winHalfYSize - cy) / winHalfYSize;
    // console.log("clicked on "+target+" at NDC ("+xNDC+","+xNDC+")");
    var clickInfo = {mx: mx, my: my,
                 cx: cx, cy: cy,
                 winXSize: winXSize,
                 winYSize: winYSize,
                 x: x, y: y};
    return clickInfo;
};

// ================================================================
// http://stackoverflow.com/questions/12886286/addeventlistner-for-keydown-on-canvas
// provided the following solution:

TW.lastClickTarget = null;

TW.storeClickTarget = function(event) {
    if( event.target.nodeName === "CANVAS" ) {
        // Remember the last canvas clicked on
        TW.lastClickTarget = event.target;
    }
};

// This handler records the last element that was clicked on
document.addEventListener('click', TW.storeClickTarget, false);

// If the last element clicked on was a canvas, send the keypress to it.
document.addEventListener('keypress', TW.onkeypress, false);

// ================================================================
// Set up shared keyboard callbacks.  Do this last, so that all functions are defined.
// Last argument is true, to have these go to the shared arrays.

TW.setKeyboardCallback("?",TW.showKeyboardCallbacks,"show keyboard callbacks",true);
TW.setKeyboardCallback("a",TW.toggleAxes,"toggle axes",true);
TW.setKeyboardCallback("b",TW.toggleBoundingBox,"toggle scene bounding box",true);
TW.setKeyboardCallback("g",TW.toggleGroundPlane,"toggle ground plane",true);
TW.setKeyboardCallback("x",TW.viewFromSide, "view from side (+X)",true);
TW.setKeyboardCallback("y",TW.viewFromAbove,"view from above (+Y)",true);
TW.setKeyboardCallback("z",TW.viewFromFront,"view from front (+Z)",true);
TW.setKeyboardCallback("o",TW.viewFromAboveFrontSide,"view obliquely, from above front side (+XYZ)",true);

// ================================================================
// Texture mapping stuff

TW.power2 = function (exponent) {
    // returns 2^exponent for exponents between 1 and 31
    if( 0 <= exponent && exponent <= 31 ) {
        return 1 << exponent;
    } else {
        throw "invalid power of two: "+exponent;
    }
};

TW.nextPowerOf2 = function (x) {
    // returns the next higher power of two
    return Math.round(Math.exp(Math.log(2)*Math.ceil(Math.log(x)/Math.log(2))));
};

TW.createCheckerboardGray = function (log2size) {
    // returns an array containing a grayscale checkerboard pattern of
    // black and white squares where the size is NxN where N = 2^log2size.
    var size = TW.power2(log2size);
    var i, j, n = 0;
    var data = new Uint8Array( size * size );
    for( i = 0 ; i < size ; ++i ) { // each row
        for( j = 0 ; j < size ; ++j ) { // each column
            if( (i&1) != (j&1) ) {
                data[n++] = 255;
            } else {
                data[n++] = 0;
            }
        }
    }
    return data;
};

TW.createCheckerboardRedWhite = function (log2size) {
    // returns an array containing an RGB checkerboard pattern of
    // black and red squares where the size is NxN where N = 2^log2size.
    var size = TW.power2(log2size);
    var data = new Uint8Array( 3 * size * size );
    var i, j, n = 0;
    for( i = 0 ; i < size ; ++i ) {
        for( j = 0 ; j < size ; ++j ) {
            if( (i&1) != (j&1) ) {
                // red
                data[n++] = 255;
                data[n++] = 0;
                data[n++] = 0;
            } else {
                // black
                data[n++] = 0;
                data[n++] = 0;
                data[n++] = 0;
            }
        }
    }
    return data;
};

TW.isArray2D = function (array2D) {
    var len = array2D.length;
    if( ! len ) {
        throw "array does not have length defined; is it even an array? "+array2D;
    }
    var width = array2D.width;
    if( ! width ) {
        throw "array does not have width defined: "+array2D;
    }
    var height = array2D.height;
    if( ! height ) {
        throw "array does not have height defined: "+array2D;
    }
    if( len != width * height ) {
        throw "array's width and height don't multiply to yield the length: "+array2D;
    }
    return true;
}

TW.rowMajorAref = function (array2D,i,j) {
    TW.isArray2D( array2D );
    var height = array2D.height;
    var width = array2D.width;
    if( i > height ) throw "array row out of bounds: "+i+" > "+height;
    if( j > width ) throw "array col out of bounds: "+j+" > "+width;
    return array2D[ i*width + j ];
};

TW.rowMajorAset = function (array2D, i, j, val) {
    // Sets element in row i, column j of a 2D array of bytes
    TW.isArray2D( array2D );
    var height = array2D.height;
    var width = array2D.width;
    if( i > height ) throw "array row out of bounds: "+i+" > "+height;
    if( j > width ) throw "array col out of bounds: "+j+" > "+width;
    array2D[ i*width + j ] = val;
};

TW.createUSFlagGray = function (log2size) {
    // returns an array containing a grayscale USFlag pattern where the
    // size is width x height where height = 2^log2size and width is twice
    // that.  We'll use black for red and blue, white for white
    var height = TW.power2(log2size);
    var width = height * 2;
    var i, j, n = 0, len = width * height;
    var data = new Uint8Array( len );
    data.width = width;
    data.height = height;
    for( i = 0 ; i < len; i++ ) data[i] = 0x80;  // initialize all to 50% gray
    // "colors".
    var RED = 0x00;
    var WHITE = 0xFF;
    var BLUE = 0x00;
    // compute flag specs
    var stripe_height = Math.floor(height / 13);
    if( stripe_height < 1 ) {
        throw "size isn't big enough for 13 stripes: "+height;
    }
    var hoist = stripe_height * 13;
    var fly = Math.floor(hoist * 1.9);      // from flag spec
    // console.log("hoist and fly: "+hoist+", "+fly);

    function doStripe(stripeNum,color) {
        var startrow = stripeNum*stripe_height;
        var nextrow  = (stripeNum+1)*stripe_height;
        var r, c;
        for( r = startrow; r < nextrow; r++ ) {
            for( c = 0 ; c < fly; c++ ) {
                TW.rowMajorAset(data,r,c,color);
            }
        }
    }

    // console.log("doing 7 red (black) stripes");
    for( i = 0 ; i < 13 ; i+=2 ) doStripe( i, RED );
    // console.log("doing 6 white stripes");
    for( i = 1 ; i < 13 ; i+=2 ) doStripe( i, WHITE );
    // union
    var unionHoist = 7 * stripe_height;
    var unionFly = Math.round(0.76 * hoist); // from flag spec
    for( i = 0 ; i < unionHoist; i++ )
        for( j = 0 ; j < unionFly; j++ )
            TW.rowMajorAset(data,i,j,BLUE);
    return data;
};


TW.hexString = function (byteArray, width, height) {
    var i, j, n = 0, str = "";
    for( i = 0 ; i < height ; i++ ) {
        var row = "";
        for ( j = 0 ; j < width ; j++ ) {
            var b = byteArray[n++];
            var ch = b < 16 ? "0"+b.toString(16) : b.toString(16);
            row += ch;
        }
        str += row + "\n";
    }
    return str;
};

TW.rectangularString = function (str, width, height ) {
    var len = str.length;
    if( len != width*height ) {
        throw "not a rectangular string";
    }
    var result = "";
    var start;
    for( start = 0 ; start < len ; start += width ) {
        result += str.substr(start,width) + "\n";
    }
    return result;
};

TW.isArrayRGB = function (arrayRGB) {
    var len = arrayRGB.length;
    if( ! len ) {
        throw "array does not have length defined; is it even an array? "+arrayRGB;
    }
    var width = arrayRGB.width;
    if( ! width ) {
        throw "array does not have width defined: "+arrayRGB;
    }
    var height = arrayRGB.height;
    if( ! height ) {
        throw "array does not have height defined: "+arrayRGB;
    }
    if( len != width * height *3 ) {
        throw "array's width and height and 3 don't multiply to yield the length: "+arrayRGB;
    }
    return true;
}

TW.rowMajorArefRGB = function (arrayRGB,i,j) {
    TW.isArrayRGB( arrayRGB );
    var height = arrayRGB.height;
    var width = arrayRGB.width;
    if( i > height ) throw "array row out of bounds: "+i+" > "+height;
    if( j > width ) throw "array col out of bounds: "+j+" > "+width;
    var index = i*width+j
    return [ arrayRGB[3*index+0],
             arrayRGB[3*index+1],
             arrayRGB[3*index+2] ];
};

TW.rowMajorAsetRGB = function (arrayRGB, i, j, R, G, B) {
    // Sets element in row i, column j of a 2D array of RGB values
    // the element is set to the given R, G, B arguments
    TW.isArrayRGB( arrayRGB );
    var height = arrayRGB.height;
    var width = arrayRGB.width;
    if( i > height ) throw "array row out of bounds: "+i+" > "+height;
    if( j > width ) throw "array col out of bounds: "+j+" > "+width;
    var index = i*width+j
    arrayRGB[ 3*index + 0 ] = R;
    arrayRGB[ 3*index + 1 ] = G;
    arrayRGB[ 3*index + 2 ] = B;
};

TW.createUSFlagRedWhiteBlue = function (log2size) {
    // returns an array containing a red, white and blue USFlag pattern
    // where the size is width x height where height = 2^log2size and
    // width is twice that.
    var height = TW.power2(log2size);
    var width = height * 2;
    var i, j, n = 0, len = width * height * 3;
    var data = new Uint8Array( len );
    data.width = width;
    data.height = height;
    for( i = 0 ; i < len; i++ ) data[i] = 0x80;  // initialize all to 50% gray
    // compute flag specs
    var stripe_height = Math.floor(height / 13);
    if( stripe_height < 1 ) {
        throw "size isn't big enough for 13 stripes: "+height;
    }
    var hoist = stripe_height * 13;
    var fly = Math.floor(hoist * 1.9);      // from flag spec
    // console.log("hoist and fly: "+hoist+", "+fly);

    function doStripe(stripeNum,r,g,b) {
        var startrow = stripeNum*stripe_height;
        var nextrow  = (stripeNum+1)*stripe_height;
        var i, j;
        for( i = startrow; i < nextrow; i++ ) {
            for( j = 0 ; j < fly; j++ ) {
                TW.rowMajorAsetRGB(data,i,j,r,g,b);
            }
        }
    }

    // console.log("doing 7 red (black) stripes");
    for( i = 0 ; i < 13 ; i+=2 ) doStripe( i, 0xFF, 0, 0 );  // RED
    // console.log("doing 6 white stripes");
    for( i = 1 ; i < 13 ; i+=2 ) doStripe( i, 0xFF, 0xFF, 0xFF );  // WHITE
    // union
    var unionHoist = 7 * stripe_height;
    var unionFly = Math.round(0.76 * hoist); // from flag spec
    for( i = 0 ; i < unionHoist; i++ )
        for( j = 0 ; j < unionFly; j++ )
            TW.rowMajorAsetRGB(data,i,j, 0, 0, 0xFF); // BLUE
    return data;
};

TW.createTriColorFlag = function (log2size, colorLeft, colorMiddle, colorRight) {
    // returns an array containing a tricolor flag like the French flag
    // where the size is width x height where height = 2^log2size and
    // width is twice that.  Colors are given by something acceptable to
    // THREE.Color()
    var height = TW.power2(log2size);
    var width = height * 2;
    var i, j, n = 0, len = width * height * 3;
    var data = new Uint8Array( len );
    data.width = width;
    data.height = height;

    function doBand(colStart, colEnd, colorSpec) {
        var colorObj = new THREE.Color(colorSpec);
        var r = 255 * colorObj.r;
        var g = 255 * colorObj.g;
        var b = 255 * colorObj.b;
        var i, j;
        for( i = 0; i < height; i++ ) {
            for( j = colStart ; j < colEnd; j++ ) {
                TW.rowMajorAsetRGB(data,i,j,r,g,b);
            }
        }
    }

    var col1 = Math.floor(width*1/3);
    var col2 = Math.floor(width*2/3);

    doBand(0, col1, colorLeft);
    doBand(col1, col2, colorMiddle);
    doBand(col2, width, colorRight);
    return data;
};

TW.makeFlagTexture = function (nickname) {
    // creates a texture as an array, then creates and returns an
    // THREE.DataTexture possible nicknames are 'nascar', 'checks'
    // 'US-Gray', 'US-RWB', and 'French'.
    var size, array, width, height, format;
    switch (nickname) {
    case 'nascar':
        size = 3;
        array = TW.createCheckerboardGray(size);
        width = height = TW.power2(size);
        format = THREE.LuminanceFormat;
        break;
    case 'checks':
        size = 3;
        array = TW.createCheckerboardRedWhite(size);
        width = height = TW.power2(size);
        format = THREE.RGBFormat;
        break;
    case 'US-Gray':
        size = 4;
        array = TW.createUSFlagGray(size);
        height = TW.power2(size);
        width = 2*height;
        format = THREE.LuminanceFormat;
        break;
    case 'US-RWB':
        size = 4;
        array = TW.createUSFlagRedWhiteBlue(size);
        height = TW.power2(size);
        width = 2*height;
        format = THREE.RGBFormat;
        break;
    case 'French':
        size = 4;
        // see wikipedia article on Flag_of_France for these colors
        array = TW.createTriColorFlag(size,0x0055A4,"white",0xEF4135);
        height = TW.power2(size);
        width = 2*height;
        format = THREE.RGBFormat;
        break;
    default:
        throw "don't know this flag nickname: "+nickname;
    }
    // console.log("flag stuff: ",array, width, height, format);
    var obj = new THREE.DataTexture( array, width, height, format);
    obj.minFilter = THREE.NearestFilter;
    obj.magFilter = THREE.NearestFilter;
    obj.needsUpdate = true;
    return obj;
};

TW.stringifyGeometry = function (geom) {
    // Returns a string printing most of the interesting information about
    // a geometry; Useful for debugging. You can call this in the console,
    // or insert the return value into an HTML document.
    if( ! geom instanceof THREE.Geometry ) {
        throw "not a THREE.Geometry: "+geom;
    }
    var result = "";
    var verts = geom.vertices;
    result += "vertices:\n";
    for( var v = 0; v < verts.length; v++ ) {
        result += "    "+(v+": "+JSON.stringify(verts[v]))+"\n";
    }
    var faces = geom.faces;
    var numFaces = geom.faces.length;
    var UVs = geom.faceVertexUvs[0]; // dunno why they have this 1-elt array
    var noUVs = (UVs.length == 0);
    if( noUVs ) {
        result += "No Vertex UV values\n";
    }
    function stringFaceVertex(index, faceProp, vertIndex) {
        result += "    ("+faceProp+"): "+faces[index][faceProp];
        if( ! noUVs ) {
            result += " "+JSON.stringify(UVs[index][vertIndex]);
        }
        result += "\n";
    }
    var f;
    result += "faces:\n";
    for( f=0; f < numFaces; f++ ) {
        var face = faces[f];
        result += "face "+f
            +" w/normal: "+JSON.stringify(face.normal)
            +" and materialIndex: "+face.materialIndex+"\n";
        stringFaceVertex(f, "a", 0);
        stringFaceVertex(f, "b", 1);
        stringFaceVertex(f, "c", 2);
    }
    return result;
};

TW.createDifferentColors = function (numColors) {

    /* Returns an array of 'numColors' different colors. All the same
     saturation and brightness, but going around the color wheel in
     numColors steps. */

    var colors = [];
    for( var i = 0 ; i < numColors ; i++ ) {
        var color = new THREE.Color();
        color.setHSL( i/numColors, 1, 0.5);
        colors.push(color);
    }
    return colors;
};

TW.showFaces = function (geom,domSelector) {

    /* Takes a geometry and a selector for a DOM element (such as
     #facecolors) and makes each face a different color and writes a
     "legend" into the document. */

    var i, numFaces = geom.faces.length;
    var colors = TW.createDifferentColors(numFaces);
    // Dom Description
    var desc = '<ol>';
    for( i = 0 ; i < numFaces; i++ ) {
        desc += '<li><span style="color:black;background-color:#'
            + colors[i].getHexString()
            +'">Face '+i+' is in this color</span>';
    }
    desc += '</ol>';
    document.querySelector(domSelector).innerHTML = desc;
    // create the mesh
    var mats = [];
    for( i = 0 ; i < numFaces ; i++ ) {
        mats.push(new THREE.MeshBasicMaterial({color:colors[i].getHex()}));
    }
    TW.setMaterialForFaces11(geom);
    var mesh = new THREE.Mesh(geom,new THREE.MeshFaceMaterial(mats));
    return mesh;
}

// ================================================================

TW.isPowerOf2 = function(x) {
    // Clever way to check if an integer is a power of two. If it's not a
    // positive integer; you're out of luck, so check for that before
    // using this. For our application (image dimensions), it works fine.
    // when we subtract 1 from an power of two, we get something that
    // shares no bits with it, so the bitwise and is false.  If it's not a
    // power of two, the borrow doesn't affect the larger power of two, so
    // the bitwise and is true.  See
    // http://www.exploringbinary.com/ten-ways-to-check-if-an-integer-is-a-power-of-two-in-c/
    return ((x != 0) && !(x & (x-1)));
};

// Should put this global elsewhere, or figure out the right scope for it.  TODO
var numTexturesToLoad = 0;

TW.textureMaterial = function (url) {
    console.log("This function is obsolete; use TW.loadTexture(url,cb) and TW.loadTexturesDone(function);");
    // Function to load an image from a URL, check its dimensions (must be
    // a power of two in order for "repeat" to work), create a texture and
    // return it.
    numTexturesToLoad ++;
    var texture = new THREE.ImageUtils.loadTexture(
        url,
        new THREE.UVMapping(),
        function (text) {
            console.log("loaded: "+url);
            if(!TW.isPowerOf2(text.image.width) ||
               !TW.isPowerOf2(text.image.height)) {
                throw "Image dimensions are not powers of two: "+url
                    +": "+text.image.width+"x"+text.image.height;
            }
            numTexturesToLoad --;
            if( numTexturesToLoad == 0 )
                TW.render();
        });
    texture.wrapS = THREE.MirroredRepeatWrapping;
    texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.needsUpdate = true;
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;          // I always get "mat" and "map" mixed up!
    mat.name = "texture from: "+url;
    return mat;
};

TW.textureLoader = new THREE.TextureLoader();

TW.loadTexture = function (url, callback) {
       TW.textureLoader.load(
           url,
           callback,
           function (xhr) {
               console.log( (xhr.loaded/xhr.total * 100) + '% of '+url+' loaded');
           },
           function (xhr) {
               console.log("An error happened loading "+url);
           });
   };

/* Loads all of an array of urls and invokes the callback with an array of
textures when all are finished loading. */

TW.loadTextures = function (urls, callback) {
    // These three, plus the callback argument, will be closure variables.
    var toLoad = [];
    var textures = [];
    var numRemaining = urls.length;
    // making the closure
    var makeCallback = function (i) {
        return function (texture) {
            var obj = toLoad[i];
            obj.loaded = true;
            obj.texture = texture;
            textures[i] = texture;
            numRemaining--;
            if(numRemaining>0) {
                console.log("texture "+i+" loaded; "+numRemaining+" to go.");
            } else {
                callback(textures);
            }
        };
    };

    for( var i=0; i<urls.length; i++ ) {
        var obj = { url: urls[i], loaded: false, texture: null };
        toLoad.push(obj);
        TW.loadTexture(urls[i], makeCallback(i));
    }
};

// ================================================================
// Bezier Curves

TW.createBezierCurve = function (cpList, steps) {
    // Using the given list of control points, returns a
    // THREE.Geometry comprising 'steps' vertices, suitable for
    // combining with a material and creating a THREE.Line out of.
    var N = Math.round(steps)+1 || 20; // number of vertices

    var geometry = new THREE.Geometry();
    var curve = new THREE.CubicBezierCurve3();

    var cp = cpList[0];
    curve.v0 = new THREE.Vector3(cp[0], cp[1], cp[2]);
    cp = cpList[1];
    curve.v1 = new THREE.Vector3(cp[0], cp[1], cp[2]);
    cp = cpList[2];
    curve.v2 = new THREE.Vector3(cp[0], cp[1], cp[2]);
    cp = cpList[3];
    curve.v3 = new THREE.Vector3(cp[0], cp[1], cp[2]);

    var j, stepSize = 1/(N-1);
    for (j = 0; j < N; j++) {
        geometry.vertices.push( curve.getPoint(j * stepSize) );
    }
    return geometry;
};

TW.createPoint = function (P, radius, material) {
    // returns a mesh for a sphere of given radius and material at the
    // given location (a list of three coordinates), suitable for adding
    // to the scene. More for debugging than anything else.
    radius = radius || 0.1;
    material = material || new THREE.MeshNormalMaterial();
    var mesh = new THREE.Mesh( new THREE.SphereGeometry(radius), material);
    mesh.position.set(P[0],P[1],P[2]);
    return mesh;
};

// ================================================================
// Bezier Surfaces; additions to THREE.js

/**
 * @author Scott D. Anderson
 */

THREE.BezierSurfaceGeometry = function( controlPoints, sSegments, tSegments) {

    THREE.Geometry.call( this );

    this.type = 'BezierSurfaceGeometry';

    this.parameters = { controlPoints: controlPoints,
                        sSegments: sSegments,
                        tSegments: tSegments };

    this.controlPoints = controlPoints;
    this.sSegments = sSegments;
    this.tSegments = tSegments;

    this.computeBezierSurfacePoints();
    this.computeBezierSurfaceFaces();
    this.computeFaceNormals();
    this.computeVertexNormals();
};

/* I was going to have this inherit from THREE.PlaneGeometry, but there's
 * nothing useful to inherit, so I'll make it inherit from
 * Geometry. Actually, I'll just define a prototype. */

THREE.BezierSurfaceGeometry.prototype = Object.create( THREE.Geometry.prototype );


/**
 * @author Scott D. Anderson
 */

THREE.BezierSurfaceGeometry.prototype.computeBezierSurfacePoints =
    function () {
    var sSegments = this.sSegments;
    var tSegments = this.tSegments;
    var cps = this.controlPoints;
    console.log("computing Bezier surface vertices with: "+sSegments+" and "+tSegments);

    var sInt, tInt; // the integer values correlating to s and t
    var s, t, verts = [];

    // First, compute all the vertices
    for( tInt = 0, t = 0; tInt <= tSegments; tInt++ ) {
        t = tInt/tSegments;
        for( sInt = 0; sInt <= sSegments; sInt++ ) {
            s = sInt/sSegments;
            // calculate blending functions (weights) for current point
            verts.push( bez(s, t) );
        }
    }
    console.log("computed "+verts.length+" vertices");
    this.vertices = verts;
    return verts;

    // the rest is all supporting functions

    function bez(s,t) {
        // this computes and returns a vertex at (s,t)
        // the code follows exactly the definition of a degree(3,3) bezier surface
        // see, for example, http://en.wikipedia.org/wiki/BÃ©zier_surface
        var i, j, M = 3, N = 3;
        var vert = new THREE.Vector3(0,0,0);  // initialize sums to zero
        for( i=0; i<=N; i++ ) {
            for( j=0; j<=M; j++ ) {
                var bernNIS = bernstein(N,i,s);
                var bernMJT = bernstein(M,j,t);
                var cp = cps[j][i];
                vert.x += cp[0] * bernNIS * bernMJT;
                // console.log("i: "+i+" j: "+j+" bernNIS: "+bernNIS+" bernMJT: "+bernMJT+" cp: "+cp[0]+" dx: "+(cp[0]*bernNIS*bernMJT)+" x: "+vert.x);

                vert.y += cp[1] * bernNIS * bernMJT;
                vert.z += cp[2] * bernNIS * bernMJT;
            }
        }
        console.log("s: "+s+" t: "+t+" x: "+vert.x);
        return vert;
    }

    function bernstein(n,i,u) {
        // This is not the general Bernstein polynomial. We ignore n
        // and assume it's always 3.
        switch (i) {
        case 0: return (1-u)*(1-u)*(1-u);
        case 1: return 3*u*(1-u)*(1-u);
        case 2: return 3*u*u*(1-u);
        case 3: return u*u*u;
        }
    }

};


THREE.BezierSurfaceGeometry.prototype.computeBezierSurfaceFaces =
    function () {
        var sSegments = this.sSegments;
        var tSegments = this.tSegments;
        // perhaps unsurprisingly, we don't need to know the vertices; we just
        // need to generate indices into the vertex array.

        // This code is based in part on the code for THREE.PlaneGeometry from R67
        // However, that code goes top to bottom, and I want to go bottom to top,
        // so I had to change the face indices so that the faces were still CCW from the front

        // I still have 0,0 in the top left corner; should I?
        // If the control points are given top-to-bottom, this code works fine.

        // x corresponds to s and z to t
        var ix, iz;

        var gridX = sSegments;
        var gridZ = tSegments;

        var gridX1 = gridX + 1;
        var gridZ1 = gridZ + 1;

        for ( iz = 0; iz < gridZ; iz ++ ) {

            for ( ix = 0; ix < gridX; ix ++ ) {

                // these are indices into the vertices array. They define a
                // quad, ABCD, with the vertices in *clockwise* order from the
                // lower left.
                var a = ix + gridX1 * iz;
                var b = ix + gridX1 * ( iz + 1 );
                var c = ( ix + 1 ) + gridX1 * ( iz + 1 );
                var d = ( ix + 1 ) + gridX1 * iz;

                console.log("vertex indices:\na: "+a+"\nb: "+b+"\nc: "+c+"\nd: "+d);

                var uva = new THREE.Vector2( ix / gridX, 1 - iz / gridZ );
                var uvb = new THREE.Vector2( ix / gridX, 1 - ( iz + 1 ) / gridZ );
                var uvc = new THREE.Vector2( ( ix + 1 ) / gridX, 1 - ( iz + 1 ) / gridZ );
                var uvd = new THREE.Vector2( ( ix + 1 ) / gridX, 1 - iz / gridZ );

                console.log("corresponding texcoords:\n"
                            +"a: ("+uva.x+","+uva.y+")\n"
                            +"b: ("+uvb.x+","+uvb.y+")\n"
                            +"c: ("+uvc.x+","+uvc.y+")\n"
                            +"d: ("+uvd.x+","+uvd.y+")\n");

                var face = new THREE.Face3( a, c, b );

                this.faces.push( face );
                this.faceVertexUvs[ 0 ].push( [ uva, uvc, uvb ] );

                face = new THREE.Face3( a, d, c );

                this.faces.push( face );
                this.faceVertexUvs[ 0 ].push( [ uva.clone(), uvd, uvc.clone() ] );
            }
        }
    };


// ================================================================

// Some linear algebra stuff. This is redundant with the stuff in
// THREE.js, of course, but more convenient, I think.

TW.vscale = function(k, v) {
    return [k*v[0],
            k*v[1],
            k*v[2]];
};

TW.vadd = function(u,v) {
    return [ u[0]+v[0],
             u[1]+v[1],
             u[2]+v[2] ];
};

TW.vsub = function(u,v) {
    return [ u[0]-v[0],
             u[1]-v[1],
             u[2]-v[2] ];
};

TW.dot = function (u, v) {
    // returns the dot product of u and v, where those are just lists of
    // three numbers.
    return u[0]*v[0] + u[1]*v[1] + u[2]*v[2];
};

TW.cross = function (u, v) {
    // returns the cross product of u and v, where those are just lists of
    // three numbers.
    return [ u[1]*v[2]-v[1]*u[2],
             v[0]*u[2]-u[0]*v[2],
             u[0]*v[1]-v[0]*u[1] ];
};

TW.perp1 = function(u, v) {
    // returns a vector perpendicular to u and in the plane defined by u and v
    var n = TW.cross(u,v);
    return TW.cross(n,u);
};

TW.perp2 = function(u, v) {
    // returns a vector perpendicular to u and in the plane defined by u and v,
    // using the triple product expansion
    var uu = TW.dot(u,u);
    var uv = TW.dot(u,v);
    // (uu)v - (uv)u
    return [ uu*v[0] - uv*u[0],
             uu*v[1] - uv*u[1],
             uu*v[2] - uv*u[2] ];
    /*
    return TW.vdiff(TW.vscale(uu,v),
                    TW.vscale(uv,u));
    */

};

// For using the THREE.js stuff

TW.vec3 = function (v) {
    return new THREE.Vector3( v[0], v[1], v[2] );
};

// ================================================================

TW.showShaders = function (sceneObject) {
    if ( ! (sceneObject instanceof THREE.Mesh) ) {
        throw 'Not a THREE.Mesh';
    }
    if( THREE.REVISION == "80" ) {
        var mat = sceneObject.material;
		var vertexShader = mat.__webglShader.vertexShader;
		var fragmentShader = mat.__webglShader.fragmentShader;
        var vspre = document.createElement('PRE');
        vspre.textContent = vertexShader;
        var fspre = document.createElement('PRE');
        fspre.textContent = fragmentShader;
        var vsp = document.createElement('P');
        vsp.textContent = "The object's vertex shader:";
        var fsp = document.createElement('P');
        fsp.textContent = "The object's fragment shader:";
        var div = document.createElement('DIV');
        div.appendChild(vsp);
        div.appendChild(vspre);
        div.appendChild(fsp);
        div.appendChild(fspre);
        document.body.appendChild(div);
    } else {
        // older code here; worked for R6?
        var mat = sceneObject.material;
        var vspre = document.createElement('PRE');
        vspre.textContent = mat.vertexShader;
        var fspre = document.createElement('PRE');
        fspre.textContent = mat.fragmentShader;
        var vsp = document.createElement('P');
        vsp.textContent = "The object's vertex shader:";
        var fsp = document.createElement('P');
        fsp.textContent = "The object's fragment shader:";
        var div = document.createElement('DIV');
        div.appendChild(vsp);
        div.appendChild(vspre);
        div.appendChild(fsp);
        div.appendChild(fspre);
        document.body.appendChild(div);
    }
};

TW.showShaders2 = function (sceneObject) {
    if( sceneObject instanceof  THREE.Mesh ) {
        var mat = sceneObject.material.__webglShader;
        var vspre = document.createElement('PRE');
        vspre.textContent = mat.vertexShader;
        var fspre = document.createElement('PRE');
        fspre.textContent = mat.fragmentShader;
        var vsp = document.createElement('P');
        vsp.textContent = "The object's vertex shader:";
        var fsp = document.createElement('P');
        fsp.textContent = "The object's fragment shader:";
        var div = document.createElement('DIV');
        div.appendChild(vsp);
        div.appendChild(vspre);
        div.appendChild(fsp);
        div.appendChild(fspre);
        document.body.appendChild(div);
    } else {
        "sorry, not a THREE.Mesh";
    }
};


// This is the end of the file
