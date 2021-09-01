public class addition {

    // This is the addition apex class
    
    public integer addNumbers(){
        integer a = 10;
    	integer b = 20;
    	integer c;
        
        c = a + b;
    	
        System.debug('Addition of two numbers' +c);
        
        return c;
    }
}