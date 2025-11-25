//membuat objek game (aturan catur lengkao)
Var game =new Chess();

//menampilkan papan catur
var board = Chessboard('board', {
    draggable: true,
    position: 'start', // posisi awal catur
    onDrop: function (source, target) {
        //cek apakah langkah valid
        var move =game.move({
            form: source,
            to:target,
            promotion: 'q'
        });

        // jika langkah tidak valid ->balikin bidak
        if (move === null) return
        snapback';
    }
})