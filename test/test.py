import pytest
from src import create_app

app = create_app()

@pytest.fixture
def client():
    with app.test_client() as client:
        with app.app_context():
            yield client

# Index link test connection
def test_index(client):
    response = client.get('/')
    html_data = response.data.decode('utf-8')
    print(html_data)

# Login page test connection
def test_login(client):
    response = client.get('/login')
    html_data = response.data.decode('utf-8')
    print(html_data)

# Home page test connection
def test_home(client):
    response = client.get('/home')
    html_data = response.data.decode('utf-8')
    print(html_data)

if __name__ == "__main__":
    """Configuration of automation test

    Yields:
        _func: _router test_
    """
    client = client()
    test_index(client)
    test_login(client)
    test_home(client)
