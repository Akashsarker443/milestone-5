// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1 id="secret-info">my secret information</h1>
//     <input id="delete-confirm" type="text" placeholder="Please type delete">
//     <button id="btn-delete" disabled>Delete</button>
//     <script>
//         document.getElementById('delete-confirm').addEventListener('keyup', function(event){
//             const text = event.target.value;
//             const deleteButton = document.getElementById('btn-delete');
//             if(text === 'delete'){
//                 deleteButton.removeAttribute('disabled');
//             }
//             else{
//                 deleteButton.setAttribute('disabled', true);
//             }
//         })
        
        
//         document.getElementById('btn-delete').addEventListener('click', function(){
//             const secret = document.getElementById('secret-info');
//             secret.style.display = 'none';
//             //  ai 3 line code sodo input ar lekha ta click korer pore remove korer jonno kora
//             const deleteConfirm = document.getElementById('delete-confirm');
//             const inputText = deleteConfirm.value;
//             deleteConfirm.value ='';
            
//         })
//     </script>
// </body>
// </html>