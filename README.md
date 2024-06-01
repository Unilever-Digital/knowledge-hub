### Description

Knowledge-hub spa application build with:
- javascript
- python
- html, css, bootstrap css

### Features
#### Dashboard app follow the information inside, consist of:

- DEOC Trend
- DEOC Top Defect
- LINE Trend
- SKU Trend
- Insight

#### Safety chat

- Safety info
- Safety advise

### Requirements:
        pip install -r requirements.txt

### Test:
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
<img width="400" alt="Screenshot 2024-04-20 at 19 26 39" src="https://github.com/Unilever-Digital/deoc-dashboard-hcl/assets/93373784/f25ecbcc-a5a7-4d56-b8e9-63612b127baf">

<img width="400" alt="Screenshot 2024-04-20 at 19 26 35" src="https://github.com/Unilever-Digital/deoc-dashboard-hcl/assets/93373784/7fc9070c-5b74-4a76-a665-1f0e1607219b">


## License

Common open-source licenses include MIT, Apache, and GPL.

## Contributors

Unilever Digital Team.

## Author(s)

Lê Chơn Minh Đạt (2024), Ho Chi Minh University of Technology, Ho Chi Minh University of Science, Unilever.
