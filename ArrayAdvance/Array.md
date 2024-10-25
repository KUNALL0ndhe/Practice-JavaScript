## Array in JavaScript



```javascript
 Array are of 2 types:

 1 : Continuous Array
 2 : Holey Array
 
 
 Within this type there are sub division 3 types:

------------Continuous Array--------------------

 1: SMI Continuous Elements (Small Integers)
 2: Double Continuous Elements
 3: Packed Continuous Elements

------------Holey Array-------------------------

 4: SMI Holey Elements (Small Integers)
 5: Double Holey Elements
 6: Packed Holey Elements


Priority Ranking is like above 

(1): SMI_Continuous:

    myArr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ];

    Description: It has only whole integers in continous pattern

(2): Double_Continuous:

    myArr = [ 1 , 2 , 3 , 4 , 5 , 6.0 ];
    myArr = [ 1 , 2 , 3 , 4 , 5 , '6' ];
    myArr = [ 1 , 2 , function one () {}]

    Description: If it contains any one below of type 
                (floating / decimalNumber,String , Function) then it falls
                under this Double continuous Array

(3): Packed_Continuous:

    myArr = [ 1 , 2 , 3 , '4' , 0.5 ];

    Description: If all the data types are in the Continuous then this  
                 falls under Packed Continuous Array.

(4): SMI_Holey :

    myArr = [ 1 , 2 , 3 ,  , 5 ];

    Description: If there are Whole Integers and it has some vacant Values
                 also known as HOLES in the elements, between 3 & 5 there is a HOLE in the array.
                 
(5): Double_Holey :

    myArr = [ 1 , 2 , 3 , 4 ,  , '5'];
    myArr = [ 1 , 2 , 3 , 4 ,  , 0.5];

    Description: If there is a HOLE inside the array , also there is an 
                 String  or Decimal  or a Function then this type of
                 an array falls under Double_Holes Elements

(6): Packed_Holey :

    myArr = [ 1 , 2 , 3 ,     , "10", 0.11 ];

    Description: IF all of them are present inside this like HOLES,
                 Integers, Strings , Float then this is least Optimazation 
                 Array which is Packed Holes which has everything


NOTE: the Array Optimization can DOWNGRADE but cannot be UPGRADED

```