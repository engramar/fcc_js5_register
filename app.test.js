const Register = require('./app')

describe('Register', () => {

	it('Test Case 1 - should return below expected given the input below', () => {							
		// Given
		const expected = 
			{
				status: "OPEN",
				change: [
					["QUARTER", 0.5]
				]
			}
			
		// When
		const result = Register(19.5, 20, [
			["PENNY", 1.01],
			["NICKEL", 2.05],
			["DIME", 3.1],
			["QUARTER", 4.25],
			["ONE", 90],
			["FIVE", 55],
			["TEN", 20],
			["TWENTY", 60],
			["ONE HUNDRED", 100]
		]) 
		
		// Then
		expect(expected).toEqual(result)
	});

	it('Test Case 2 - should return below expected given the input below', () => {							
		// Given
		const expected = 
			{
				status: "OPEN",
				change: [
					["TWENTY", 60],
					["TEN", 20],
					["FIVE", 15],
					["ONE", 1],
					["QUARTER", 0.5],
					["DIME", 0.2],
					["PENNY", 0.04]
				]
			}
			
		// When
		const result = Register(3.26, 100, [
			["PENNY", 1.01],
			["NICKEL", 2.05],
			["DIME", 3.1],
			["QUARTER", 4.25],
			["ONE", 90],
			["FIVE", 55],
			["TEN", 20],
			["TWENTY", 60],
			["ONE HUNDRED", 100]
		]) 
		
		// Then
		expect(expected).toEqual(result)
	});

	it('Test Case 3 - should return below expected given the input below', () => {							
		// Given
		const expected = 
			{
				status: "INSUFFICIENT_FUNDS",
				change: []
			}
			
		// When
		const result = Register(19.5, 20, [
			["PENNY", 0.01],
			["NICKEL", 0],
			["DIME", 0],
			["QUARTER", 0],
			["ONE", 0],
			["FIVE", 0],
			["TEN", 0],
			["TWENTY", 0],
			["ONE HUNDRED", 0]
		]) 
		
		// Then
		expect(expected).toEqual(result)
	});

	it('Test Case 4 - should return below expected given the input below', () => {							
		// Given
		const expected = 
			{
				status: "INSUFFICIENT_FUNDS",
				change: []
			}
			
		// When
		const result = Register(19.5, 20, [
			["PENNY", 0.01],
			["NICKEL", 0],
			["DIME", 0],
			["QUARTER", 0],
			["ONE", 1],
			["FIVE", 0],
			["TEN", 0],
			["TWENTY", 0],
			["ONE HUNDRED", 0]
		]) 
		
		// Then
		expect(expected).toEqual(result)
	});

	it('Test Case 5 - should return below expected given the input below', () => {							
		// Given
		const expected = 
			{
				status: "CLOSED",
				change: [
					["PENNY", 0.5],
					["NICKEL", 0],
					["DIME", 0],
					["QUARTER", 0],
					["ONE", 0],
					["FIVE", 0],
					["TEN", 0],
					["TWENTY", 0],
					["ONE HUNDRED", 0]
				]
			}
							
		// When
		const result = Register(19.5, 20, [
			["PENNY", 0.5],
			["NICKEL", 0],
			["DIME", 0],
			["QUARTER", 0],
			["ONE", 0],
			["FIVE", 0],
			["TEN", 0],
			["TWENTY", 0],
			["ONE HUNDRED", 0]
		]) 
	
		// Then
		expect(expected).toEqual(result)
	});

});