{

	"metadata": {
		"formatVersion": 3.2,
		"type" : "scene"
	},

	"urlBaseType" : "relativeToHTML",

	"objects": {

		"group" : {
			"position" : [ 0, 0, 0 ],
			"rotation" : [ 0, 0, 0 ],
			"scale"	   : [ 1, 1, 1 ],
			"visible"  : true,
			"children" : {

				
				"Jietl" : {
					"type": "dae",
					"url" : "models/untitled.dae",
					"position" : [ -1500, 0, 1500 ],
					"rotation" : [ -1.57, 0, 0 ],
					"scale"	   : [ 1, 1, 1 ],
					"userData" : {
						"Jiet" : true
					},
					"visible"  : true
				},


				"ground" : {
					"geometry" : "plane",
					"material" : "gallery_floor",
					"position" : [ 0, 0, 0 ],
					"rotation" : [ -1.57, 0, 0 ],
					"scale"	   : [ 1, 1, 1 ],
					"visible"  : true
				},


				"camera1": {
					"type"  : "PerspectiveCamera",
					"fov"   : 50,
					"aspect": 1.33333,
					"near"  : 1,
					"far"   : 2500,
					"position": [ 0, 0, 0 ],
					"target"  : [ 0, 0, 0 ]
				},

				"camera2": {
					"type"  : "OrthographicCamera",
					"left"  : 0,
					"right" : 1024,
					"top"   : 0,
					"bottom": 1024,
					"near"  : 1,
					"far"   : 1000,
					"position": [ 0, 0, 0 ],
					"target"  : [ 0, 0, 0 ]
				}
			}
		}

	},

	"geometries": {

		
		"plane": {
			"type"   : "plane",
			"width"  : 1250,
			"height" : 1250,
			"widthSegments"  : 100,
			"heightSegments" : 100
		}

	},

	
	

	"materials": {

		
		"gallery_floor": {
			"type": "MeshBasicMaterial",
			"parameters": { "color": 16777215, "map": "texture_gallery_floor" }
		}

	},

	"textures": {

	

		"texture_gallery_floor": {
			"url": "textures/gallery/marble.png",
			"magFilter": "NearestFilter",
			"minFilter": "LinearMipMapLinearFilter"
		}
	},

	"fogs":	{
		"basic": {
			"type": "linear",
			"color": [1,1,1],
			"near": 0,
			"far": 2500
		},

		"exponential": {
			"type": "exp2",
			"color": [1,1,1],
			"density": 0.0005
		},

		"black": {
			"type": "exp2",
			"color": [0,0,0],
			"density": 0.0005
		}
	},

	"defaults": {
		"bgcolor": [0,0,0],
		"bgalpha": 1,
		"camera": "camera1",
		"fog": "basic"
	}

}
