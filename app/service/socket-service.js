angular.module('app').factory('socketService',function(NET) {

    var socketService = {
        connect:function(){

            var socketIo = io.connect(NET.SIO_URL, {path: '/socket.io'});

            socketIo.on('connect', function(){

                socketIo.on('message', function(data){
                  console.log(data)
                })
                
                socketIo.emit('message', {hello: 'Hello from the browser! :)'})

            });

        }
    };

    return socketService;
});
