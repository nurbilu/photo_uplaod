# errors and progress record and readme : 
## CODE CHANGES : 
    delete in views.py is now delImg
    put " ------------------- " updImg
    


## ERROS BECKEND AND FRONTEND :


    Check the render method of `Task`. See https://reactjs.org/link/warning-keys for more information.
        at div
        at Task (http://localhost:3000/static/js/bundle.js:172:76)
        at div
        at App
        at Provider (http://localhost:3000/static/js/bundle.js:34952:3)
    on delete :
        console.log : 
            taskAPI.js:15 
            DELETE http://127.0.0.1:8000/delImg/%3Cundefined%3E/ 404 (Not Found)
    on put :
        console.log :  
            taskAPI.js:20  
            PUT http://127.0.0.1:8000//updImg/undefined/ 404 (Not Found)