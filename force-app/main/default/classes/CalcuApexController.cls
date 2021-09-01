public class CalcuApexController {

    // Adding coomments from Developer branch
	@AuraEnabled
    public static decimal getAdditionResult(decimal fstNumber, decimal secNumber){
        return (fstNumber + secNumber);
    }
}