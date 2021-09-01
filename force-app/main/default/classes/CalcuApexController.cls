public class CalcuApexController {
	@AuraEnabled
    public static decimal getAdditionResult(decimal fstNumber, decimal secNumber){
        return (fstNumber + secNumber);
    }
}