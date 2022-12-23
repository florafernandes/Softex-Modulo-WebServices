{
    "name": "SOAP-CORREIOS",
    "version": "1.0.0",
    "lockfileVersion": 2,
    "requires": true,
    "packages": {
      "": {
        "name": "SOAP-CORREIOS",
        "version": "1.0.0",
        "license": "ISC",
        "dependencies": {
          "correios-brasil": "^3.0.3"
        }
      },
      "node_modules/asynckit": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
        "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q=="
      },
      "node_modules/axios": {
        "version": "0.27.2",
        "resolved": "https://registry.npmjs.org/axios/-/axios-0.27.2.tgz",
        "integrity": "sha512-t+yRIyySRTp/wua5xEr+z1q60QmLq8ABsS5O9Me1AsE5dfKqgnCFzwiCZZ/cGNd1lq4/7akDWMxdhVlucjmnOQ==",
        "dependencies": {
          "follow-redirects": "^1.14.9",
          "form-data": "^4.0.0"
        }
      },
      "node_modules/combined-stream": {
        "version": "1.0.8",
        "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
        "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
        "dependencies": {
          "delayed-stream": "~1.0.0"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/correios-brasil": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/correios-brasil/-/correios-brasil-3.0.3.tgz",
        "integrity": "sha512-5v4obW+22RY4zxyXRYkaLvpXUhLzSBvlPnR35OET80fbuCtwA9t4CC9m50ZoAwm2i3CkdS1/if4Np3049A/SJQ==",
        "dependencies": {
          "axios": "^0.27.2",
          "iconv-lite": "^0.6.3",
          "xml-js": "^1.6.11"
        }
      },
      "node_modules/delayed-stream": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
        "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
        "engines": {
          "node": ">=0.4.0"
        }
      },
      "node_modules/follow-redirects": {
        "version": "1.15.2",
        "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.2.tgz",
        "integrity": "sha512-VQLG33o04KaQ8uYi2tVNbdrWp1QWxNNea+nmIB4EVM28v0hmP17z7aG1+wAkNzVq4KeXTq3221ye5qTJP91JwA==",
        "funding": [
          {
            "type": "individual",
            "url": "https://github.com/sponsors/RubenVerborgh"
          }
        ],
        "engines": {
          "node": ">=4.0"
        },
        "peerDependenciesMeta": {
          "debug": {
            "optional": true
          }
        }
      },
      "node_modules/form-data": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.0.tgz",
        "integrity": "sha512-ETEklSGi5t0QMZuiXoA/Q6vcnxcLQP5vdugSpuAyi6SVGi2clPPp+xgEhuMaHC+zGgn31Kd235W35f7Hykkaww==",
        "dependencies": {
          "asynckit": "^0.4.0",
          "combined-stream": "^1.0.8",
          "mime-types": "^2.1.12"
        },
        "engines": {
          "node": ">= 6"
        }
      },
      "node_modules/iconv-lite": {
        "version": "0.6.3",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
        "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
        "dependencies": {
          "safer-buffer": ">= 2.1.2 < 3.0.0"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/mime-db": {
        "version": "1.52.0",
        "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
        "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/mime-types": {
        "version": "2.1.35",
        "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
        "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
        "dependencies": {
          "mime-db": "1.52.0"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "node_modules/sax": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
        "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
      },
      "node_modules/xml-js": {
        "version": "1.6.11",
        "resolved": "https://registry.npmjs.org/xml-js/-/xml-js-1.6.11.tgz",
        "integrity": "sha512-7rVi2KMfwfWFl+GpPg6m80IVMWXLRjO+PxTq7V2CDhoGak0wzYzFgUY2m4XJ47OGdXd8eLE8EmwfAmdjw7lC1g==",
        "dependencies": {
          "sax": "^1.2.4"
        },
        "bin": {
          "xml-js": "bin/cli.js"
        }
      }
    },
    "dependencies": {
      "asynckit": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
        "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q=="
      },
      "axios": {
        "version": "0.27.2",
        "resolved": "https://registry.npmjs.org/axios/-/axios-0.27.2.tgz",
        "integrity": "sha512-t+yRIyySRTp/wua5xEr+z1q60QmLq8ABsS5O9Me1AsE5dfKqgnCFzwiCZZ/cGNd1lq4/7akDWMxdhVlucjmnOQ==",
        "requires": {
          "follow-redirects": "^1.14.9",
          "form-data": "^4.0.0"
        }
      },
      "combined-stream": {
        "version": "1.0.8",
        "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
        "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
        "requires": {
          "delayed-stream": "~1.0.0"
        }
      },
      "correios-brasil": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/correios-brasil/-/correios-brasil-3.0.3.tgz",
        "integrity": "sha512-5v4obW+22RY4zxyXRYkaLvpXUhLzSBvlPnR35OET80fbuCtwA9t4CC9m50ZoAwm2i3CkdS1/if4Np3049A/SJQ==",
        "requires": {
          "axios": "^0.27.2",
          "iconv-lite": "^0.6.3",
          "xml-js": "^1.6.11"
        }
      },
      "delayed-stream": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
        "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ=="
      },
      "follow-redirects": {
        "version": "1.15.2",
        "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.2.tgz",
        "integrity": "sha512-VQLG33o04KaQ8uYi2tVNbdrWp1QWxNNea+nmIB4EVM28v0hmP17z7aG1+wAkNzVq4KeXTq3221ye5qTJP91JwA=="
      },
      "form-data": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.0.tgz",
        "integrity": "sha512-ETEklSGi5t0QMZuiXoA/Q6vcnxcLQP5vdugSpuAyi6SVGi2clPPp+xgEhuMaHC+zGgn31Kd235W35f7Hykkaww==",
        "requires": {
          "asynckit": "^0.4.0",
          "combined-stream": "^1.0.8",
          "mime-types": "^2.1.12"
        }
      },
      "iconv-lite": {
        "version": "0.6.3",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
        "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
        "requires": {
          "safer-buffer": ">= 2.1.2 < 3.0.0"
        }
      },
      "mime-db": {
        "version": "1.52.0",
        "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
        "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg=="
      },
      "mime-types": {
        "version": "2.1.35",
        "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
        "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
        "requires": {
          "mime-db": "1.52.0"
        }
      },
      "safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "sax": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
        "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
      },
      "xml-js": {
        "version": "1.6.11",
        "resolved": "https://registry.npmjs.org/xml-js/-/xml-js-1.6.11.tgz",
        "integrity": "sha512-7rVi2KMfwfWFl+GpPg6m80IVMWXLRjO+PxTq7V2CDhoGak0wzYzFgUY2m4XJ47OGdXd8eLE8EmwfAmdjw7lC1g==",
        "requires": {
          "sax": "^1.2.4"
        }
      }
    }
  }