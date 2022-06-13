import data from "../../data/data";

describe("testing data", () => {
  test("data is correct", () => {
    expect(data).toMatchSnapshot();
    expect(1).toEqual(1);
  });

  test("check data length", () => {
    expect(data.breads).toHaveLength(10);
    expect(data.breakfast).toHaveLength(10);
    expect(data.cakes).toHaveLength(11);
    expect(data.desserts).toHaveLength(11);
  });

  test("check data breads name", () => {
    expect(data.breads.map((item) => item.name)).toEqual([
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
    ]);
  });

  test("check data breakfast id", () => {
    expect(data.breakfast.map((item) => item.id)).toEqual([
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
    ]);
  });

  test("check data cakes price", () => {
    expect(data.cakes.map((item) => item.price)).toEqual([
      20, 21, 20, 25, 23, 23, 25, 20, 20, 20, 20,
    ]);
  });

  test("check data desserts images", () => {
    expect(data.desserts.map((item) => item.image)).toEqual([
      "/images/desserts/cannoli.png",
      "/images/desserts/cappuccino.png",
      "/images/desserts/caramel.png",
      "/images/desserts/eclair.png",
      "/images/desserts/grandmarnier.png",
      "/images/desserts/mix_fruit_florentine.png",
      "/images/desserts/black_forest.png",
      "/images/desserts/cappuccino_eclair.png",
      "/images/desserts/carrot_cake.png",
      "/images/desserts/chocolate_suicide.png",
      "/images/desserts/mango_mousse.png",
    ]);
  });

  for (let i = 0; i < data.breads.length; i += 1) {
    test(`data[${i}] should have proprieties (name, id, category, price, description, rating, countInStock, image, numReviews )`, () => {
      expect(data.breads[i]).toHaveProperty("id");
      expect(data.breads[i]).toHaveProperty("name");
      expect(data.breads[i]).toHaveProperty("category");
      expect(data.breads[i]).toHaveProperty("price");
      expect(data.breads[i]).toHaveProperty("description");
      expect(data.breads[i]).toHaveProperty("rating");
      expect(data.breads[i]).toHaveProperty("countInStock");
      expect(data.breads[i]).toHaveProperty("image");
      expect(data.breads[i]).toHaveProperty("numReviews");
    });
  }

  for (let i = 0; i < data.cakes.length; i += 1) {
    test(`data[${i}] should have proprieties (name, id, category, price, description, rating, countInStock, image, numReviews )`, () => {
      expect(data.cakes[i]).toHaveProperty("id");
      expect(data.cakes[i]).toHaveProperty("name");
      expect(data.cakes[i]).toHaveProperty("category");
      expect(data.cakes[i]).toHaveProperty("price");
      expect(data.cakes[i]).toHaveProperty("description");
      expect(data.cakes[i]).toHaveProperty("rating");
      expect(data.cakes[i]).toHaveProperty("countInStock");
      expect(data.cakes[i]).toHaveProperty("image");
      expect(data.cakes[i]).toHaveProperty("numReviews");
    });
  }

  for (let i = 0; i < data.breakfast.length; i += 1) {
    test(`data[${i}] should have proprieties (name, id, category, price, description, rating, countInStock, image, numReviews )`, () => {
      expect(data.breakfast[i]).toHaveProperty("id");
      expect(data.breakfast[i]).toHaveProperty("name");
      expect(data.breakfast[i]).toHaveProperty("category");
      expect(data.breakfast[i]).toHaveProperty("price");
      expect(data.breakfast[i]).toHaveProperty("description");
      expect(data.breakfast[i]).toHaveProperty("rating");
      expect(data.breakfast[i]).toHaveProperty("countInStock");
      expect(data.breakfast[i]).toHaveProperty("image");
      expect(data.breakfast[i]).toHaveProperty("numReviews");
    });
  }

  for (let i = 0; i < data.desserts.length; i += 1) {
    test(`data[${i}] should have proprieties (name, id, category, price, description, rating, countInStock, image, numReviews )`, () => {
      expect(data.desserts[i]).toHaveProperty("id");
      expect(data.desserts[i]).toHaveProperty("name");
      expect(data.desserts[i]).toHaveProperty("category");
      expect(data.desserts[i]).toHaveProperty("price");
      expect(data.desserts[i]).toHaveProperty("description");
      expect(data.desserts[i]).toHaveProperty("rating");
      expect(data.desserts[i]).toHaveProperty("countInStock");
      expect(data.desserts[i]).toHaveProperty("image");
      expect(data.desserts[i]).toHaveProperty("numReviews");
    });
  }

  test("mock return value of a function one time", () => {
    const mock = jest.fn(() => "I am a mock function");
    expect(mock("Calling mock function")).toBe("I am a mock function");
    expect(mock).toHaveBeenCalledWith("Calling mock function");
  });

  test("spying using original implementation", () => {
    const bread = {
      name: (n) => `Bread name: ${n}`,
    };
    const spy = jest.spyOn(bread, "name");
    expect(bread.name("Assorted 1LB Bread Bowl")).toBe(
      "Bread name: Assorted 1LB Bread Bowl"
    );
    expect(spy).toHaveBeenCalledWith("Assorted 1LB Bread Bowl");
  });

  test("spying using mockImplementation", () => {
    const bread = {
      name: (n) => `Bread name: ${n}`,
    };
    const spy = jest.spyOn(bread, "name");
    spy.mockImplementation((n) => "Crazy bread");
    expect(bread.name("Assorted 1LB Bread Bowl")).toBe("Crazy bread");
    spy.mockRestore();
    expect(bread.name("Assorted 1LB Bread Bowl")).toBe(
      "Bread name: Assorted 1LB Bread Bowl"
    );
  });

  test("bread returns the last name of the pizza", () => {
    const bread1 = data.breads[0];
    const bread2 = data.breads[1];
    const bread3 = data.breads[2];
    const bread = jest.fn((currentBread) => currentBread.name);

    bread(bread1);
    bread(bread2);
    bread(bread3);

    expect(bread).toHaveLastReturnedWith("Olive Parmesean Pumperknickle");
  });

  test("bread data has Olive Parmesean Pumperknickle and matches as an object", () => {
    const oliveParmeseanPumperknickle = {
      id: "3",
      name: "Olive Parmesean Pumperknickle",
      category: "breads",
      image: "/images/breads/olive.png",
      price: 4,
      countInStock: 20,
      rating: 4.5,
      numReviews: 10,
      description: "",
    };
    expect(data.breads[2]).toMatchObject(oliveParmeseanPumperknickle);
  });

  test("expect a promise to resolve", async () => {
    const user = {
      getFullName: jest.fn(() => Promise.resolve("Raul")),
    };
    await expect(user.getFullName("Raul")).resolves.toBe("Raul");
  });

  test("expect a promise to reject", async () => {
    const user = {
      getFullName: jest.fn(() =>
        Promise.reject(new Error("Something went wrong"))
      ),
    };
    await expect(user.getFullName("Raul")).rejects.toThrow(
      "Something went wrong"
    );
  });
});
