let p = 1;

let gameOn = true;

let avaliableMoves = 42;
let currentMoves = 0;

let matrix = [
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
];

function dropDatThang(c)
{
	
	
	if (gameOn == true)
	{
			for (let r = 5; r>=0; r--)
			{
				if (matrix[r][c] == 0)
				{
					if(p == 1)
					{
						document.getElementById("pmove").innerHTML="Have Fun!";
						matrix[r][c] = 1;
						p = 2;
						currentMoves++;
						document.getElementById("pmove2").innerHTML="It's Red's Turn";
						document.getElementById("pmove2").style.backgroundColor = "red";
					}
					else
					{
					matrix[r][c] = 2;
					p = 1;
					currentMoves++;
					document.getElementById("pmove2").innerHTML = "It's Yellow's Turn";
					document.getElementById("pmove2").style.backgroundColor = "yellow";
					}
					updateChart();
					winCheck(matrix);
					
					if (currentMoves == avaliableMoves)
					{
					document.getElementById("pmove").innerHTML="UH OH!";
					document.getElementById("pmove2").innerHTML="Looks like we've got ourselves a draw here!";
					document.getElementById("pmove2").style.backgroundColor = "green";
					gameOn = false;
					updateChart();
					return false;
					}
					return true;
				}
			}
	}
	else
	{
		return false;
	}
	
}

function updateChart() {
	
	
	for (let r = 0; r < 6; r++)
	{
		for (let c = 0; c < 7; c++)
		{
			if (matrix[r][c] == 0)
			{
				document.getElementById("blank" + r + c).style.backgroundColor = "white";
				
			}
			else if (matrix[r][c] == 1)
			{
				document.getElementById("blank" + r + c).style.backgroundColor = "yellow";
			}
			else if (matrix[r][c] == 2)
			{
				document.getElementById("blank" + r + c).style.backgroundColor = "red";
			}
		}
	}
}

function lineCheck (w, x, y, z)
{
	return ((w != 0) && (w == x) && (w == y) && (w == z));
}

function winCheck (chart)
{
	//down
	for (let r = 0; r < 3; r++)
	{
		for (let c = 0; c < 7; c++)
		{
			if (lineCheck(chart[r][c], chart[r+1][c], chart[r+2][c], chart[r+3][c]))
			{
				gameIsDone(chart[r][c]);
				return(true);
			}
		}
	}
	
	//right
	for (let r = 0; r < 6; r++)
	{
		for (let c = 0; c < 4; c++)
		{
			if (lineCheck(chart[r][c], chart[r][c+1], chart[r][c+2], chart[r][c+3]))
			{
				gameIsDone(chart[r][c]);
				return(true);
			}
		}
	}
	
	//south-east direction
	for (let r = 0; r < 3; r++)
	{
		for (let c = 0; c < 4; c++)
		{
			if (lineCheck(chart[r][c], chart[r+1][c+1], chart[r+2][c+2], chart[r+3][c+3]))
			{
				gameIsDone(chart[r][c]);
				return(true);
			}
		}
	}
	
	//south-west direction
	for (let r = 3; r < 6; r++)
	{
		for (let c = 0; c < 4; c++)
		{
			if (lineCheck(chart[r][c], chart[r-1][c+1], chart[r-2][c+2], chart[r-3][c+3]))
			{
				gameIsDone(chart[r][c]);
				return(true);
			}
		}
	}
	return 0;
}

function gameIsDone(winner)
{
	
	
	document.getElementById("pmove").innerHTML="Congratulations!";
	
	if (winner == 1)
	{
		document.getElementById("pmove2").innerHTML="PLAYER YELLOW WON!";
		document.getElementById("pmove2").style.backgroundColor = "yellow";
	}
	else if (winner == 2)
	{
		document.getElementById("pmove2").innerHTML="PLAYER RED WON!";
		document.getElementById("pmove2").style.backgroundColor = "red";
	}

	updateChart();
	gameOn = false;
}

function resetChart()
{
	
	for (let r =0; r<=5; r++) 
	{
			for (let c =0; c<=6; c++) 
			{
				matrix[r][c] = 0;
			}
	}
	currentMoves = 0
	gameOn = true;
	p = 1;
	document.getElementById("pmove").innerHTML="click on any of the colum to start";
	document.getElementById("pmove2").innerHTML = "It's Yellow's Turn";
	document.getElementById("pmove2").style.backgroundColor = "yellow";
	updateChart();
}


