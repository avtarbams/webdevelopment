var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var color,
x, y, r;


//first

x = 625;
y = 100;
r = 50;
    for(var i =1;i<10;i++)
{   
    if(i%2==0)
    {
        color ="white";
    }else{
        color = "black"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    y = y + 3;
    r = r - 3;
}
x = x - 3;
for(var i =1;i<9;i++)
{   
    if(i%2==0)
    {
        color ="black";
    }else{
        color = "white"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    y = y - 3;
    r = r - 3;
}

//second
x = 500;
y = 100;
r = 100;
    for(var i =1;i<10;i++)
{   
    if(i%2==0)
    {
        color ="white";
    }else{
        color = "black"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    x = x+6;
    r = r -6;
}
y = y - 5;
for(var i =1;i<9;i++)
{   
    if(i%2==0)
    {
        color ="black";
    }else{
        color = "white"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    x = x - 5;
    r = r - 5;
}
//third

x = 660;
y = 440;
r = 60;
    for(var i =1;i<10;i++)
{   
    if(i%2==0)
    {
        color ="white";
    }else{
        color = "black"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    x = x - 3;
    y = y - 3;
    r = r - 3;
}
y = y  + 3;
x = x+3;

for(var i =1;i<9;i++)
{   
    if(i%2==0)
    {
        color ="black";
    }else{
        color = "white"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    y = y + 4;
    x = x + 2;
    r = r - 4;
}
//fourth
x = 290;
y = 400;
r = 50;
60;
for(var i =1;i<10;i++)
{   
if(i%2==0)
{
    color ="white";
}else{
    color = "black"
}

ctx.beginPath();
ctx.fillStyle=color;
ctx.arc(x, y, r, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
y = y -3;
r = r - 3;
}
x=x+2;
y = y+2;
r=r-2;
for(var i =1;i<9;i++)
{   
if(i%2==0)
{
    color ="black";
}else{
    color = "white"
}

ctx.beginPath();
ctx.fillStyle=color;
ctx.arc(x, y, r, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
y = y + 2;
x = x - 2;
r = r - 2;
}
//fifth
x = 250;
y = 470;
r = 80;
    for(var i =1;i<9;i++)
{   
    if(i%2==0)
    {
        color ="black";
    }else{
        color = "white"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    x = x-5;
    y = y+5;
    r = r -5;
}
r = r-7;
for(var i =1;i<9;i++)
{   
    if(i%2==0)
    {
        color ="black";
    }else{
        color = "white"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    x = x + 3;
    y = y - 3;
    r = r - 3;
}
//sixth
x = 150;
y = 25;
r = 70;
    for(var i =1;i<10;i++)
{   
    if(i%2==0)
    {
        color ="white";
    }else{
        color = "black"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    x = x-4;
    r = r -4;
}
y = y +4;
x = x-2;
for(var i =1;i<9;i++)
{   
    if(i%2==0)
    {
        color ="black";
    }else{
        color = "white"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    x = x + 4;
    y = y -2;
    r = r - 4;
}
//seventh
x = 200;
y = 100;
r = 70;
    for(var i =1;i<10;i++)
{   
    if(i%2==0)
    {
        color ="black";
    }else{
        color = "white"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    y = y+4;
    r = r -4;
}
x =x +2;
for(var i =1;i<9;i++)
{   
    if(i%2==0)
    {
        color ="black";
    }else{
        color = "white"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    
    y = y  -4;
    x = x-2;
    r = r - 4;
}
//eight
x = -20;
y = 300;
r = 80;
for(var i =1;i<10;i++)
{   
    if(i%2==0)
    {
        color ="black";
    }else{
        color = "white"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    y = y +2;
    x = x +2;
    r = r -4;
}

y =y-4;
for(var i =1;i<9;i++)
{   
    if(i%2==0)
    {
        color ="black";
    }else{
        color = "white"
    }

    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    
    y = y  -4;
    x = x-4;
    r = r - 4;
}