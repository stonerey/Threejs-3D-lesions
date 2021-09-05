﻿/*
	y：需要调节的高度的模型
	opacityChild: 需要在模型里面一直透明的模型
    popover: 点击之后显示文字
    disabled:有点按钮不能点击
    tumour：肿瘤块
    dot:需要点击透明按钮之后不透明的模型
*/

var list={
	
	"d1":{
		"name":"腮腺瘤",
		"y":0,
		"tumour":[],
		"dot":["c1","c6","c4","c5","c9","c10","c11"],
		"list":{
                        "c1":{
				    "man":[],
				    "ref":"肿瘤",
			    	"flag":true
			    },
			"c2":{
				    "man":[],
				    "ref":"腮腺",
			    	     "flag":true
			    },
                        "c3":{
				    "man":[],
				    "ref":"颅骨",
			    	"flag":true
			    },
                        "c4":{
				    "man":[],
				    "ref":"动脉",
			    	"flag":true
			    },
                        "c5":{
				    "man":[],
				    "ref":"静脉",
			    	"flag":true
			    },
		}
	},
	"d2":{
		"name":"肝",
		"y":0,
		"tumour":["c16"],
		"dot":["c4","c5","c7","c8","c9","c11"],
		"list":{
			"c1":{
				    "man":[],
				    "ref":"胆囊",
			    	     "flag":true
			    },
			"c2":{
				    "man":[],
				    "ref":"胆囊内高亮",
			    	"flag":true
			    },    
			"c3":{
				    "man":[],
				    "ref":"胆总管",
			    	"flag":true
			    },
			"c4":{
				    "man":[],
				    "ref":"动脉血管",
			    	"flag":true
			    },
                        "c5":{
				    "man":[],
				    "ref":"肝静脉血管",
			    	"flag":true
			    },
			"c6":{
				    "man":[],
				    "ref":"肝脏低密度",
			    	"flag":true
			    },    
			"c7":{
				    "man":[],
				    "ref":"静脉系",
			    	"flag":true
			    },
                         "c8":{
				    "man":[],
				    "ref":"淋巴结",
			    	"flag":true
			    }
		}
	},
	"d3":{
		"name":"结直肠癌",
		"y":0,
		"tumour":["c3"],
		"opacityChild":['c1'],
		"list":{
			"c1":{
				    "man":[],
				    "ref":"身体",
			    	"flag":true
			    },
			"c2":{
				    "man":[],
				    "ref":"结直肠前部",
			    	"flag":true
			    },
			"c3":{
				    "man":[],
				    "ref":"肿瘤",
			    	"flag":true
			    },
			"c4":{
				    "man":[],
				    "ref":"结直肠后部",
			    	"flag":true
			    }
			
		}
	},
	"d4":{
		"name":"甲状腺癌",
		"y":0,
		"tumour":["c2"],
		"dot":["c3","c4","c5"],
		"opacityChild":['c1'],
		"list":{
			"c1":{
				    "man":[],
				    "ref":"身体",
			    	"flag":true
			    },
			"c2":{
				    "man":[],
				    "ref":"肿瘤",
			    	"flag":true
			    },
			"c3":{
				    "man":[],
				    "ref":"甲状腺",
			    	"flag":true
			    },
			"c4":{
				    "man":[],
				    "ref":"食管",
			    	"flag":true
			    },
			"c5":{
				    "man":[],
				    "ref":"气管",
			    	"flag":true
			    }
		}
	},
	"d5":{
		"name":"胃癌",
        "y":0,
        "tumour":["c3"],
        "opacityChild":['c1'],
        "list":{
			"c1":{
				    "man":[],
				    "ref":"身体",
			    	"flag":true
			    },
			"c2":{
				    "man":[],
				    "ref":"胃前部",
			    	"flag":true
			    },
			"c3":{
				    "man":[],
				    "ref":"肿瘤",
			    	"flag":true
			    },
			"c4":{
				    "man":[],
				    "ref":"胃后部",
			    	"flag":true
			    }
		}
	},
	"d6":{
		"name":"乳腺癌",
        "y":0,
        "tumour":["c2"],
        "opacityChild":['c1'],
		"list":{
			"c1":{
				    "man":[],
				    "ref":"乳房外皮",
			    	"flag":true
			    },
			"c2":{
				    "man":[],
				    "ref":"肿瘤",
			    	"flag":true
			    },
			"c3":{
				    "man":[],
				    "ref":"身体",
			    	"flag":true
			    }
		}
	},
	"d7":{
		"name":"食管癌",
        "y":0,
        "tumour":["c3"],
        "opacityChild":['c1'],
		"list":{
			"c1":{
				    "man":[],
				    "ref":"身体",
			    	"flag":true
			    },
			"c2":{
				    "man":[],
				    "ref":"食管前部",
			    	"flag":true
			    },
			"c3":{
				    "man":[],
				    "ref":"肿瘤",
			    	"flag":true
			    },
			"c4":{
				    "man":[],
				    "ref":"食管后部",
			    	"flag":true
			    }
		}
	},
	"d8":{
		"name":"宫颈癌",
        "y":0,
        "tumour":["c3"],
        "opacityChild":['c1'],
		"list":{
			"c1":{
				    "man":[],
				    "ref":"身体",
			    	"flag":true
			    },
			"c2":{
				    "man":[],
				    "ref":"生殖系统",
			    	"flag":true
			    },
			"c3":{
				    "man":[],
				    "ref":"肿瘤",
			    	"flag":true
			    },
			"c4":{
				    "man":[],
				    "ref":"子宫颈",
			    	"flag":true
			    }
		}
	},
	"d9":{
		"name":"子宫内膜癌",
        "y":0,
        "tumour":["c3"],
        "opacityChild":['c1'],
		"list":{
			"c1":{
				    "man":[],
				    "ref":"身体",
			    	"flag":true
			    },
			"c2":{
				    "man":[],
				    "ref":"生殖系统",
			    	"flag":true
			    },
			"c3":{
				    "man":[],
				    "ref":"肿瘤",
			    	"flag":true
			    },
			"c4":{
				    "man":[],
				    "ref":"子宫内膜",
			    	"flag":true
			    }
		}
	},
	"d10":{
		"name":"前列腺癌",
        "y":0,
        "tumour":["c5"],
        "dot":["c2","c3","c4"],
        "opacityChild":['c1'],
		"list":{
			"c1":{
				    "man":[],
				    "ref":"身体",
			    	"flag":true
			    },
			"c2":{
				    "man":[],
				    "ref":"肾脏",
			    	"flag":true
			    },
			"c3":{
				    "man":[],
				    "ref":"输尿管",
			    	"flag":true
			    },
			"c4":{
				    "man":[],
				    "ref":"膀胱",
			    	"flag":true
			    },
			"c5":{
				    "man":[],
				    "ref":"肿瘤",
			    	"flag":true
			    },
			"c6":{
				    "man":[],
				    "ref":"前列腺",
			    	"flag":true
			    }
		}
	},
	"d11":{
		"name":"卵巢癌",
        "y":0,
        "tumour":["c3"],
        "dot":["c2","c4"],
        "opacityChild":['c1'],
		"list":{
			"c1":{
				    "man":[],
				    "ref":"身体",
			    	"flag":true
			    },
			"c2":{
				    "man":[],
				    "ref":"生殖系统",
			    	"flag":true
			    },
			"c3":{
				    "man":[],
				    "ref":"肿瘤",
			    	"flag":true
			    },
			"c4":{
				    "man":[],
				    "ref":"卵巢",
			    	"flag":true
			    },

		}
	},
	"d12":{
		"name":"胆囊癌",
        "y":0,
        "tumour":["c4"],
        "opacityChild":['c1'],
		"list":{
			"c1":{
			    "man":[],
			    "ref":"身体",
			    "flag":true
			    },
			"c2":{
			        "man":[],
			        "ref":"肝脏",
			    	"flag":true
			    },
			"c3":{
			        "man":[],
			        "ref":"胆囊前部",
			    	"flag":true
			    },
			"c4":{
			        "man":[],
			        "ref":"肿瘤",
			        "man":[],
			    	"flag":true
			    },
			"c5":{
				 "man":[],
				 "ref":"胆囊后部",
			     "flag":true
			    }
		}
	},
	"d13":{
		"name":"胰腺癌",
        "tumour":["c4"],
        "opacityChild":['c1'],
        "y":0,
		"list":{
			"c1":{
			    "man":[],
			    "ref":"身体",
			    "flag":true
			    },
			"c2":{
			    "man":[],
			    "ref":"胰腺周边器官",
			    "flag":true
			    },
			"c3":{
		        "man":[],
		        "ref":"胰腺前部",
		    	"flag":true
			    },
			"c4":{
			    "man":[],
			    "ref":"肿瘤",
			    "flag":true
			    },
			"c5":{
			    "man":[],
			    "ref":"胰腺后部",
			    "flag":true
			    }
		}
	},
	"d14":{
		"name":"肾癌",
        "tumour":["c3"],
        "dot":['c3','c4','c5','c6'],
        "opacityChild":['c1'],
        "y":0,
		"list":{
			"c1":{
			    "man":[],
			    "ref":"身体",
		    	"flag":true
			    },
			"c2":{
			    "man":[],
			    "ref":"肾脏前部",
		    	"flag":true
			    },
			"c3":{
			    "man":[],
			    "ref":"肿瘤",
		    	"flag":true
			    },
			"c4":{
			    "man":[],
			    "ref":"肾脏后部",
		    	"flag":true
			    },
			"c5":{
			    "man":[],
			    "ref":"输尿管",
		    	"flag":true
			    },
			"c6":{
			    "man":[],
			    "ref":"膀胱",
		    	"flag":true
			    }
		}
	},
	"d15":{
		"name":"急性心肌梗死",
        "y":0,
        "tumour":['c2'],
        "dot":['c1','c2','c3'],
		"list":{
			"c1":{
			    "man":[],
			    "ref":"冠状动脉前部",
		    	"flag":true
			    },
			"c2":{
			    "man":[],
			    "ref":"心肌梗死",
		    	"flag":true
			    },
			"c3":{
			    "man":[],
			    "ref":"心脏",
		    	"flag":true
			    }
		}
	},
	"d16":{
		"name":"脑中风后遗症",
		"tumour":['c1','c2'],
		"dot":['c1','c2','c3','c4','c5'],
        "y":0,
		"list":{
			"c1":{
			    "man":[],
			    "ref":"血栓性脑中风",
		    	"flag":true
			    },
			"c2":{
			    "man":[],
			    "ref":"出血性脑中风",
		    	"flag":true
			    },
			"c3":{
			    "man":[],
			    "ref":"动脉",
		    	"flag":true
			    },
			"c4":{
			    "man":[],
			    "ref":"胼胝体",
		    	"flag":true
			    },
			"c5":{
			    "man":[],
			    "ref":"大脑",
		    	"flag":true
			    }
		}
	},
	"d17":{
		"name":"重大器官移植",
        "y":0,
        "hideNor":'c5_1',
        "tumour":["c5_0"],
        "dot":["c5_1","c4","c5_0"],
        "opacityChild":['c1'],
		"list":{
			"c1":{
			    "man":[],
			    "ref":"身体",
		    	"flag":true
			    },
			"c2":{
			    "man":[],
			    "ref":"心脏",
		    	"flag":true
			    },
			"c3":{
			    "man":[],
			    "ref":"肺脏",
		    	"flag":true
			    },
			"c4":{
			    "man":[],
			    "ref":"肝脏",
		    	"flag":true
			    },
			"c5_0":{
			    "man":[],
			    "ref":"肾脏",
		    	"flag":true
			    },
			"c5_1":{
			    "man":[],
			    "ref":"肾脏",
		    	"flag":true
			    }
		}
	},
	"d18":{
		"name":"冠状动脉搭桥",
        "y":0,
        "dot":['c1','c2','c3'],
        "tumour":["c1"],
		"list":{
			"c1":{
			    "man":[],
			    "ref":"冠状动脉搭桥",
		    	"flag":true
			},
			"c2":{
			    "man":[],
			    "ref":"冠状动脉",
		    	"flag":true
			},
			"c3":{
			    "man":[],
			    "ref":"心脏",
		    	"flag":true
			}
		}
	},
	"d19":{
		"name":"终末期肾病",
        "y":0,
        "tumour":['c4_0','c3','c2'],
        "hideNor":'c4_1',
        "dot":["c2","c3",'c4_1','c4_0',"c5","c6","c7","c8","c9","c9_1","c9_2","c9_3","c9_4","c9_5","c9_6","c9_7","c9_8","c9_9","c9_10"],
        "opacityChild":['c1'],
		"list":{
			"c1":{
			    "man":[],
			    "ref":"身体",
		    	"flag":true
			    }, 
			"c2":{
			    "man":[],
			    "ref":"移植肾脏",
		    	"flag":true
			    }, 
			"c3":{
			    "man":[],
			    "ref":"移植输尿管",
		    	"flag":true
			    },  
			"c4_0":{
			    "man":[],
			    "ref":"肾脏",
		    	"flag":true
			    }, 
			"c4_1":{
			    "man":[],
			    "ref":"肾脏",
		    	"flag":true
			    },  
			"c5":{
			    "man":[],
			    "ref":"输尿管",
		    	"flag":true
			    },  
			"c6":{
			    "man":[],
			    "ref":"膀胱",
		    	"flag":true
			    },
			"c7":{
			    "man":[],
			    "ref":"静脉",
		    	"flag":true
			    },
			"c8":{
			    "man":[],
			    "ref":"动脉",
		    	"flag":true
			    },
			"c9":{
			    "man":[],
			    "ref":"肾脏内部结构",
		    	"flag":true
			    }
		},
        "objname":{
        	"c1":{
			    "ref":"身体"
			    }, 
			"c2":{
			    "ref":"移植肾脏"
			    }, 
			"c3":{
			    "ref":"移植输尿管"
			    },  
			"c4":{
			    "ref":"肾脏"
			    },  
			"c5":{
			    "ref":"输尿管"
			    },  
			"c6":{
			    "ref":"膀胱"
			    },
			"c7":{
			    "ref":"静脉"
			    },
			"c8":{
			    "ref":"动脉"
			    },
			"c9":{
			    "ref":"肾脏内部结构"
			    },
			"c9_1":{
			    "ref":"肾皮质"
			    },  
			"c9_2":{
			    "ref":"肾小盏"
			    },  
			"c9_3":{
			    "ref":"肾动脉"
			    },
			"c9_4":{
			    "ref":"肾静脉"
			    },
			"c9_5":{
			    "ref":"肾孟"
			    },
			"c9_6":{
			    "ref":"输尿管"
			},
			"c9_7":{
			    "ref":"肾锥体"
			    },
			"c9_8":{
			    "ref":"肾乳头"
			    },
			"c9_9":{
			    "ref":"肾大盏"
			    },
			"c9_10":{
			    "ref":"纤维囊"
			    }
        }
	}
}