import pytest
from src import create_app

app = create_app()
@pytest.fixture
# client component app maker 
def client():
    with app.test_client() as client:
        with app.app_context():
            yield client

# index link test connection
def test_index(client):
    response = client.get('/')
    json_data = response.get_json()
    assert response.status_code == 200
    assert json_data['message'] == 1

# login page test connection
def test_login(client):
    response = client.get('/login')
    json_data = response.get_json()
    assert response.status_code == 200
    assert json_data['result'] == 1
        
        
def test_home(client):
    response = client.get('/home')
    json_data = response.get_json()
    assert response.status_code == 200
    assert json_data['result'] == 1

if __name__ == "__main__":
    """configuration of automation test

    Yields:
        _func: _router test_
    """
    test_index(client)
    test_login(client)
    test_home(client)
    
   