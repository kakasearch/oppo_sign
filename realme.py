import re,requests

#########处理fidder的heades
def handle_fiddle(fidder_headers):
  """将fiodder raw 中的请求头部分str转成dict"""
  headers = {}
  for item in fidder_headers.split("\n"):
    if ': ' in item:
      [k,v] = item.split(': ')
      k = k.strip()
      v = v.strip()
      if k !=  "Content-Length: ":  #去除Content-Length
        headers[k] = v
  return headers
def re_fidder(fidder_raw_text:str):
  """传入fidder的raw，重发请求"""
  firstline,method,url = re.findall(r'((POST|GET) (http.*?) HTTP/.*)',fidder_raw_text)[0]
  if method == "POST":
    body = fidder_raw_text.split('\n\n')[-1].strip()
    header_text = fidder_raw_text.replace(firstline,'').replace(body,'')
    r = requests.post(url,headers = handle_fiddle(header_text),data=body,verify=False)
    return r

def realme_com():
  #realme社区签到
  #需要在app抓包找到自己的Authorization
  fidder_raw_text = """POST https://www.realmebbs.com/api/check-in HTTP/1.1
  from: android
  User-Agent: Mozilla/5.0 (Linux; Android 11; RMX3161 Build/RKQ1.201217.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/93.0.4577.62 Mobile Safari/537.36 realme.android/2.4.8 PhoneModel/RMX3161_11_A.12
  version: 2.4.8
  channel: productionDomestic
  Authorization: !!!your Authorization Here!!!!！！！！！！！！！！！！！！！！！！！
  Region: CN
  Content-Length: 0
  Host: www.realmebbs.com
  Connection: Keep-Alive"""
  result = re_fidder(fidder_raw_text).json()
  if result["status"] == "error":
  	print("realme社区签到失败",result["message"])
  else:
  	print("realme社区签到 ok!")
if __name__ == "__main__":
  realme_com()