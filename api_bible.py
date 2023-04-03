import requests  

url = "https://www.biblegateway.com/votd/get/?format=html&version=LSG"

get_reponse = requests.get(url=url)
print(get_reponse.status_code)
print(get_reponse.text)