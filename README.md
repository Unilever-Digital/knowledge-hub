### Knowledge-hub

Knowledge-hub is a Single-Page Application (SPA) designed to serve as a centralized knowledge hub. 
It leverages various technologies to deliver a user-friendly and informative experience.

### Tech Stack

- **Frontend**: ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=flat&logo=bootstrap&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)

- **Backend**: `Flask`![Python](https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54)  (indicated by main.py in the Test section)

python-version: [![python](https://img.shields.io/badge/python-3.11.0-brightgreen.svg?style=flat)](https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)


### Clone the repository
        git clone https://github.com/Unilever-Digital/knowledge-hub

### Installation
- Install required dependencies: 

        python -m venv env
        env\Scripts\activate.bat
        pip install -r requirements.txt
    
- Testing local server runing:

        python main.py

- Testing with guricon server (for Mac):

        gunicorn -c instance/config.py wsgi:app

Access the API endpoints at `http://localhost:8080` by default.

### Source
```
.
├── instance                  # config backend server
├── public                    # public icon/image source file
│   └── favicon.ico
├── sqlite
│   └── .db                   # database file
│   └── ...
├── src
│   └── controls
│       └── controls          # utils of every single page
│       └── query             # connection info for 2nd server database
│       └── ..
│   └── models
│   └── static                # public folder
│     └── images              # image used by default template
│         └── png
│         └── jpg
│         └── svg
│     └── css
│     └── js
│   └── templates             # template ui 
│   └── views                 # endpoint API
│   └── env.py
├── test                      # test root
├── .gitignore
├── .python-version           # python version define file
├── config.py                 # config backend server file
├── Dockerfile                # Dockerfile
├── docker-compose.yml        # docker-compose configuration
├── main.py                   # running file
├── package.json              # config file
├── Procfile                  # config file for running in Gunicorn server
├── README.md                 # README file
├── requirements.txt          # list python lib file
└── ...                       # Other configuration files (prettier, ignore files,...)
```

### Features
#### Interactive Dashboard:
- **DEOC Trend**: Visualize trends in DEOC (Defect Elimination on Concept) data.
- **DEOC Top Defect**: Identify the most prevalent DEOC defects.
- **LINE Trend**: Track trends in LINE data (unspecified in the prompt).
- **SKU Trend**: Analyze trends for Stock Keeping Units (SKUs).

#### Insights
- Gain valuable insights from the data.

#### Safety Chat
- Access safety information.
- Receive safety advice.


### Mashup

<img width="800" alt="image" src="https://github.com/Unilever-Digital/knowledge-hub/assets/93373784/124d84bd-cb56-44f4-ad63-52329103972e">

<img width="800" alt="Screenshot 2024-04-20 at 19 26 39" src="https://github.com/Unilever-Digital/deoc-dashboard-hcl/assets/93373784/f25ecbcc-a5a7-4d56-b8e9-63612b127baf">

<img width="800" alt="Screenshot 2024-04-20 at 19 26 35" src="https://github.com/Unilever-Digital/deoc-dashboard-hcl/assets/93373784/7fc9070c-5b74-4a76-a665-1f0e1607219b">



### Contributors
- [Le Chon Minh Dat](https://github.com/lcmd65)
- [Nguyen Tong Lam](https://github.com/lamnt01)
- [Tran Minh Quan](https://github.com/fakerqmt)

### License
This project is licensed under the [MIT License](LICENSE).

### Support
For support or inquiries, please contact [Le-chon-minh.dat@unilever.com](mailto:Le-chon-minh.dat@unilever.com).
