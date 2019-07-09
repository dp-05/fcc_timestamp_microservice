
# API Project: Timestamp Microservice

Description: 

This is an API that provides a timestamp in a JSON response in UNIX and UTC formats. 
  
If left blank, the response is a simple date() object. If invalid (cannot be parsed in date() object), the response returns an error message.

Example:   
    
    request: <url>/api/timestamp/2005-12-15;  
    response: {"unix":1135468800000,"utc":"Sun, 25 Dec 2005 00:00:00 GMT"}
  
  
    request: <url>/api/timestamp/thisisn'tcorrect
    response: {"unix": null, "utc" : "Invalid Date"} 
  
