
//fix this function:
function startCounting()
{
	var counter = 100;
	while(counter <= 100)
	{
        console.log(counter);
        if(counter==0){
            break;
        }
        else{
        counter --;
        }
	}
	
	return counter;
}

startCounting();