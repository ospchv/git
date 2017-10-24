//Bubble sort сортировка пузырьком
		function bubble(ar)
		{
		 var count = ar.length-1;

			for (var i = 0; i < count; i++){ 
			     for (var j = 0; j < count-i; j++){
			        if (ar[j]> ar[j+1]){
			           var max = ar[j];
			           ar[j] = ar[j+1];
			           ar[j+1] = max;
			        }
			    }
			}
		 return ar;
		}