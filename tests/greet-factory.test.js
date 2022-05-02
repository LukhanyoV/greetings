describe("Testing greetings factory function", () => {
    describe("test for valid names: contain only letters", () => {
        it("should be able to set the name of the user with three letters long", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("Emi");
            assert.equal("Emi", greetMe.getUserName());
        });

        it("extrawhite spaces are trimmed: \"            Lukhanyo                    \"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("            Lukhanyo                    ");
            assert.equal("Lukhanyo", greetMe.getUserName());
        });

        it("valid names are corrected to start with capital letters: \"emihle\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("emihle");
            assert.equal("Emihle", greetMe.getUserName());
        });

        it("mixed case names are corrected to start with capital letters: \"LuKhAnYo\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("LuKhAnYo");
            assert.equal("Lukhanyo", greetMe.getUserName());
        });
    });

    describe("test for invalid names: contains something other than letters", () => {
        it("name should at least be three letters long", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("LV");
            assert.equal("Invalid name given!", greetMe.getUserName());
        });

        it("names should not have numbers: \"Lukhanyo8768\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("Lukhanyo8768");
            assert.equal("Invalid name given!", greetMe.getUserName());
        });

        it("names cannot contain space in between letters: \"Lukhanyo Vakele\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("Lukhanyo8768");
            assert.equal("Invalid name given!", greetMe.getUserName());
        });

        it("names cannot contain any pancuations: \"Lukhanyo_Vakele!\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("Lukhanyo8768");
            assert.equal("Invalid name given!", greetMe.getUserName());
        });
    });

    describe("test greeting by using valid names and known languages", () => {
        it("should return \"Hello, Lukhanyo\" when name is \"Lukhanyo\" and language is \"English\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("Lukhanyo");
            greetMe.setGreetLanguage("english");
            assert.equal("Hello, Lukhanyo", greetMe.makeGreet());
        });

        it("should return \"Molo, Lukhanyo\" when name is \"Lukhanyo\" and language is \"IsiXhosa\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("Lukhanyo");
            greetMe.setGreetLanguage("isixhosa");
            assert.equal("Molo, Lukhanyo", greetMe.makeGreet());
        });

        it("should return \"Hallo, Lukhanyo\" when name is \"Lukhanyo\" and language is \"Afrikaans\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("Lukhanyo"); 
            greetMe.setGreetLanguage("afrikaans");
            assert.equal("Hallo, Lukhanyo", greetMe.makeGreet());
        });
    });

    describe("test greeting by using valid names and unknown/missing languages", () => {
        it("should return \"Invalid language specified!\" when name is \"Lukhanyo\" and language is \"Sesotho\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("Lukhanyo");
            greetMe.setGreetLanguage("sesotho");
            assert.equal("Invalid language specified!", greetMe.makeGreet());
        });

        it("should return \"Invalid language specified!\" when name is \"Lukhanyo\" and language is \"\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("Lukhanyo");
            greetMe.setGreetLanguage("");
            assert.equal("Invalid language specified!", greetMe.makeGreet());
        });

        it("should return \"Invalid language specified!\" when name is \"Lukhanyo\" and language is not set", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("Lukhanyo");
            assert.equal("Invalid language specified!", greetMe.makeGreet());
        });
    });


    describe("test greetings by using invalid names and valid languages", () => {
        it("should return \"Invalid name given!\" when name is \"Lukhanyo7784\" and language is \"English\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("Lukhanyo7784");
            greetMe.setGreetLanguage("english");
            assert.equal("Invalid name given!", greetMe.makeGreet());
        });

        it("should return \"Invalid name given!\" when name is \"Lukhanyo_Vakele!\" and language is \"IsiXhosa\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("Lukhanyo_Vakele!");
            greetMe.setGreetLanguage("isixhosa");
            assert.equal("Invalid name given!", greetMe.makeGreet());
        });

        it("should return \"Invalid name given!\" when name is \"as33\" and language is \"Afrikaans\"", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            greetMe.setUserName("as33"); 
            greetMe.setGreetLanguage("afrikaans");
            assert.equal("Invalid name given!", greetMe.makeGreet());
        });
    });

    describe("test greeting by checking the number of users greeted", () => {
        it("should return 0 if no one has been greeted", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            assert.equal(0, greetMe.getLength());
        });

        it("should return 3 since 3 unique valid users have been greeted", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            
            greetMe.setUserName("Emi"); 
            greetMe.setGreetLanguage("afrikaans");
            greetMe.makeGreet();

            greetMe.setUserName("Lukhanyo"); 
            greetMe.setGreetLanguage("afrikaans");
            greetMe.makeGreet();

            greetMe.setUserName("Vakele"); 
            greetMe.setGreetLanguage("afrikaans");
            greetMe.makeGreet();

            assert.equal(3, greetMe.getLength());
        });

        it("should return 2 since 2 unique valid users have been greeted: doesn't count duplicates", () => {
            // make instance of the greetings factory function
            const greetMe = Greetings();
            
            greetMe.setUserName("Emi"); 
            greetMe.setGreetLanguage("afrikaans");
            greetMe.makeGreet();

            greetMe.setUserName("Lukhanyo"); 
            greetMe.setGreetLanguage("afrikaans");
            greetMe.makeGreet();

            greetMe.setUserName("Emi"); 
            greetMe.setGreetLanguage("afrikaans");
            greetMe.makeGreet();

            assert.equal(2, greetMe.getLength());
        });
    });
});