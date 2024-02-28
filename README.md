# errors and progress record and readme : 
## CODE CHANGES : 
    delete in views.py is now delImg
    put " ------------------- " updImg
    


## ERROS BECKEND AND FRONTEND :
    main keywords to look for :
        - Broken pipe
        - how to fix undifend id 
    dj terminal when refresh react :
        [27/Feb/2024 16:46:00] "GET /get_all_images HTTP/1.1" 200 1493
        [27/Feb/2024 16:46:00] "GET /get_all_images HTTP/1.1" 200 1493
        Not Found: /get_all_images/
        [27/Feb/2024 16:46:00] "GET /get_all_images/ HTTP/1.1" 404 3236
        Not Found: /get_all_images/
        [27/Feb/2024 16:46:00] "GET /get_all_images/ HTTP/1.1" 404 3236
        Not Found: /images/GOPR0232.JPG
        [27/Feb/2024 16:46:00] "GET /images/GOPR0232.JPG HTTP/1.1" 404 3362
        Not Found: /images/GOPR0232_8Iplm7m.JPG
        Not Found: /images/GOPR0625_ELmFYRB.JPG
        [27/Feb/2024 16:46:00] "GET /images/GOPR0232_8Iplm7m.JPG HTTP/1.1" 404 3394
        Not Found: /images/GOPR0409.JPG
        [27/Feb/2024 16:46:00] "GET /images/GOPR0409.JPG HTTP/1.1" 404 3362
        [27/Feb/2024 16:46:00] "GET /images/GOPR0625_ELmFYRB.JPG HTTP/1.1" 404 3394
        [27/Feb/2024 16:46:00,277] - Broken pipe from ('127.0.0.1', 5501)
        Not Found: /images/GOPR0232_0b0Ppt6.JPG
        Not Found: /images/GOPR0232_zbHdw4A.JPG
        [27/Feb/2024 16:46:00] "GET /images/GOPR0232_0b0Ppt6.JPG HTTP/1.1" 404 3394
        Not Found: /images/GOPR0625.JPG
        [27/Feb/2024 16:46:00] "GET /images/GOPR0232_zbHdw4A.JPG HTTP/1.1" 404 3394
        [27/Feb/2024 16:46:00,290] - Broken pipe from ('127.0.0.1', 5499)
        [27/Feb/2024 16:46:00] "GET /images/GOPR0625.JPG HTTP/1.1" 404 3362
        Not Found: /images/G0060388_qI9qL8A.JPG
        [27/Feb/2024 16:46:00] "GET /images/G0060388_qI9qL8A.JPG HTTP/1.1" 404 3394
        Not Found: /images/GOPR0625_C1h0jBd.JPG
        Not Found: /images/G0060388.JPG
        [27/Feb/2024 16:46:00] "GET /images/GOPR0625_C1h0jBd.JPG HTTP/1.1" 404 3394
        [27/Feb/2024 16:46:00] "GET /images/G0060388.JPG HTTP/1.1" 404 3362
        Not Found: /images/me_ai_pic_1_jS4WMzr.webp
        Not Found: /images/8_.png
        [27/Feb/2024 16:46:00] "GET /images/8_.png HTTP/1.1" 404 3338
        [27/Feb/2024 16:46:00] "GET /images/me_ai_pic_1_jS4WMzr.webp HTTP/1.1" 404 3410
        [27/Feb/2024 16:46:00,331] - Broken pipe from ('127.0.0.1', 5508)
        [27/Feb/2024 16:46:00,331] - Broken pipe from ('127.0.0.1', 5507)
        Not Found: /images/G0020124_D6M9Noz.JPG
        [27/Feb/2024 16:46:00] "GET /images/G0020124_D6M9Noz.JPG HTTP/1.1" 404 3394
        Not Found: /images/GOPR0410_nnPn7qw.JPG
        [27/Feb/2024 16:46:00] "GET /images/GOPR0410_nnPn7qw.JPG HTTP/1.1" 404 3394
        Not Found: /images/GOPR0410.JPG
        Not Found: /images/G0020124.JPG
        [27/Feb/2024 16:46:00] "GET /images/GOPR0410.JPG HTTP/1.1" 404 3362
        [27/Feb/2024 16:46:00] "GET /images/G0020124.JPG HTTP/1.1" 404 3362
    console.log : 
            taskAPI.js:9 
            GET http://127.0.0.1:8000/get_all_images/ 404 (Not Found)
            taskAPI.js:9 
            GET http://127.0.0.1:8000/get_all_images/ 404 (Not Found)
            Task.js:54 Warning: Each child in a list should have a unique "key" prop.

            Check the render method of `Task`. See https://reactjs.org/link/warning-keys for more information.
                at div
                at Task (http://localhost:3000/static/js/bundle.js:172:76)
                at div
                at App
                at Provider (http://localhost:3000/static/js/bundle.js:34952:3)
    on delete : 
        [27/Feb/2024 16:49:17] "DELETE /delete_image/undefined/ HTTP/1.1" 404 3263
        console.log : 
            taskAPI.js:20 
        
        
       PUT http://localhost:3000/update_imageundefined/ 404 (Not Found)