import requests  

url = "http://bibleapi.appspot.com/mc,4,39?o=json"

get_reponse = requests.get(url=url)
print(get_reponse.status_code)
print(get_reponse.text)