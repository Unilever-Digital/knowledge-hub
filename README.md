### Description:

This project is a Single-Page Application (SPA) designed to serve as a centralized knowledge hub. 
It leverages various technologies to deliver a user-friendly and informative experience.

### Tech Stack:

- Frontend: JavaScript, HTML, CSS, Bootstrap CSS
- Backend: Python Flask (indicated by main.py in the Test section)

### Features:

#### Interactive Dashboard:
- **DEOC Trend**: Visualize trends in DEOC (Defect Elimination on Concept) data.
- **DEOC Top Defect**: Identify the most prevalent DEOC defects.
- **LINE Trend**: Track trends in LINE data (unspecified in the prompt).
- **SKU Trend**: Analyze trends for Stock Keeping Units (SKUs).

#### Insights: Gain valuable insights from the data.
#### Safety Chat:
- Access safety information.
- Receive safety advice.
- Installation:

### Clone the repository.
Install required dependencies: 

        pip install -r requirements.txt
    
Testing local server runing:

        python main.py

Access the API endpoints at `http://localhost:8080` by default.

## Source
```
.
├── instance
├── public
│   └── favicon.ico
├── sqlite
│   └── .db
│   └── ...
├── src
│   └── controls
│   └── models
│   └── static                # Public folder
│     └── images              # Image used by default template for document site (not api site)
│         └── png
│         └── jpg
│         └── svg
│     └── css
│     └── js
│   └── templates             # Template ui for document site (not api site)
│   └── views                 # API
│   └── env.py
├── test
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

### Mashup

<img width="600" alt="Screenshot 2024-04-20 at 19 26 39" src="https://github.com/Unilever-Digital/deoc-dashboard-hcl/assets/93373784/f25ecbcc-a5a7-4d56-b8e9-63612b127baf">

<img width="600" alt="Screenshot 2024-04-20 at 19 26 35" src="https://github.com/Unilever-Digital/deoc-dashboard-hcl/assets/93373784/7fc9070c-5b74-4a76-a665-1f0e1607219b">

### License:

The project uses a commonly used open-source license (specific license to be determined).

### Contributors:

Unilever Digital Team
Contact Author(s):

Lê Chơn Minh Đạt (2024), Ho Chi Minh University of Technology & Ho Chi Minh University of Science (affiliation can be combined), Unilever (if applicable)
