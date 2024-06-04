import pytest
from src import create_app

app = create_app()

if __name__ == "__main__":
    """configuration of automation test

    Yields:
        _func: _router test_
    """
    @pytest.fixture
    def client():
        with app.test_client() as client:
            with app.app_context():
                yield client

    def test_home(client):
        response = client.get('/')
        json_data = response.get_json()
        assert response.status_code == 200
        assert json_data['message'] == 1

    def test_add(client):
        response = client.get('/login')
        json_data = response.get_json()
        assert response.status_code == 200
        assert json_data['result'] == 1

        response = client.get('/home')
        json_data = response.get_json()
        assert response.status_code == 200
        assert json_data['result'] == 1

