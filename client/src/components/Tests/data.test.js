
import data from "../../data/data";

describe('testing data', () => {
    test('data is correct', () => { 
    expect(data).toMatchSnapshot ();
    expect(1).toEqual(1); 
    
 })

 test('check data length', () => {
     expect(data.breads).toHaveLength(10);
     expect(data.breakfast).toHaveLength(10);
     expect(data.cakes).toHaveLength(11);
     expect(data.desserts).toHaveLength(11);
 })

 test('check data name', () => {
     expect(data.breads.map(item => item.name)).toEqual([
        "Assorted 1LB Bread Bowl",
        "Assorted 4x4 Ciabatta",
        "Olive Parmesean Pumperknickle",
        "Pretzel Rolls",
        "Seven Grain Rosemary",
        "Dozen of Assorted Artisan Rolls",
        "Dozen of Assorted Dinner Rolls",
        "Assorted French Baguette",
        "Foccacia 4x4",
        "Kaiser Rolls",
     ]) 
 })

 for(let i = 0; i < data.breads.length; i += 1) {
     test(`data[${i}] should have proprieties (name, id, category, price, description, rating, countInStock, image, numReviews )`, () => {
         expect(data.breads[i]).toHaveProperty('id')
         expect(data.breads[i]).toHaveProperty('name')
         expect(data.breads[i]).toHaveProperty('category')
         expect(data.breads[i]).toHaveProperty('price')
         expect(data.breads[i]).toHaveProperty('description')
         expect(data.breads[i]).toHaveProperty('rating')
         expect(data.breads[i]).toHaveProperty('countInStock')
         expect(data.breads[i]).toHaveProperty('image')
         expect(data.breads[i]).toHaveProperty('numReviews')

     }) 
 }

 test('mock return value of a function one time', () => {
     const mock = jest.fn(() => 'I am a mock function');
     expect(mock('Calling mock function')).toBe('I am a mock function');
     expect(mock).toHaveBeenCalledWith('Calling mock function')
 })


})

