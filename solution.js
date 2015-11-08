function solution1(A, B, C)
{
	return Math.ceil((B-A)/C);
}

function solution2(A,B)
{
	var res = A^A;
	for(var i = A; i <= B; ++i)
	{
		for(var j = i; j <= B; ++j)
		{
			var xor = i^j;
			res = xor > res? xor : res;
		}		
	}
	return res;
}

