
# API Project: Timestamp Microservice

This API provides a timestamp response in UNIX and UTC formats to valid date or time requests. 
  
If left blank, the response is the current timestamp. If invalid (cannot be parsed in date()), the response returns an error message.

Example:   
    
    request: <url>/api/timestamp/2005-12-15;  
    response: {"unix":1135468800000,"utc":"Sun, 25 Dec 2005 00:00:00 GMT"}
  
  
    request: <url>/api/timestamp/thisisn'tcorrect
    response: {"unix": null, "utc" : "Invalid Date"} 
  
