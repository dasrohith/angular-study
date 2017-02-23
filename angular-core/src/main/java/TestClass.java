
public class TestClass {
	
	
	public static void main(String[] args) {
		
		try {
			//throw new Exception("Hello");
			
//			String s = null;
//			s.charAt(0);
			
//			String s = "S";
//			s.charAt(1);
			
			long[] l = new long[Integer.MAX_VALUE];

			
		}catch (RuntimeException e) {
			System.out.println("======RuntimeException Block======");
			e.printStackTrace();
		} catch (Exception e) {
			System.out.println("======Exception Block======");
			e.printStackTrace();
		}catch (Error e) {
			System.out.println("======Error Block======");
			e.printStackTrace();
		}catch (Throwable e) {
			System.out.println("======Throwable Block======");
			e.printStackTrace();
		}
	}

}
