let titre = document.querySelector('.titre');
let Turn = "X";
let squares = [];

function done()
{
    for(let i = 0 ; i < squares.length ; i++)
    {
        return i;
    }
}

function Virifier(n1,n2,n3) 
{

    titre.innerHTML = `${squares[n1]} Gagnante`
    document.getElementById('element'+n1).style.background = 'black'
    document.getElementById('element'+n2).style.background = 'black'
    document.getElementById('element'+n3).style.background = 'black'

    setInterval(function(){titre.innerHTML += '.'} , 1000)
    setTimeout(function(){location.reload()},4000)

}

function Gagnant()
{
    for(let i = 1 ; i < 10 ; i++)
    {
        squares[i] = document.getElementById('element'+i).innerHTML
    }

    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "")
    {
        Virifier(1,2,3);

    }else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != "")
    {
        Virifier(4,5,6);

    }else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != "")
    {
        Virifier(7,8,9);

    }else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[4] != "")
    {
        Virifier(1,4,7);

    }else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != "")
    {
        Virifier(2,5,8);

    }else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != "")
    {
        Virifier(3,6,9);

    }else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != "")
    {
        Virifier(1,5,9);

    }else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != "")
    {
        Virifier(3,5,7);
    }else if(squares[1] != "" && squares[2] != "" && squares[3] != "" && squares[4] != "" && squares[5] != "" && squares[6] != "" && squares[7] != "" && squares[8] != "" && squares[9] != "")
    {
        setInterval(function(){titre.innerHTML += '.'} , 1000)
        setTimeout(function(){location.reload()},4000)
    }
}

function Juex(id)
{
    let element = document.getElementById(id);
    if(Turn === "X" && element.innerHTML == '')
    {
        element.innerHTML = 'X';
        Turn = 'O';
        titre.innerHTML = 'O';

    }else if(Turn === 'O' && element.innerHTML == '')
    {
        element.innerHTML = 'O';
        Turn = 'X';
        titre.innerHTML = 'X';
    }

    Gagnant();
}
