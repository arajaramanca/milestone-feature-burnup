describe("Example test set", function() {
    it("should have written tests",function(){
        expect(false).toBe(false);
        expect(Ext.Date.format(new Date(),'Y')).toEqual('2018');
    });

    it('should render the app', function() {
        var app = Rally.test.Harness.launchApp("CArABU.app.MsBurn");
        expect(app.getEl()).toBeDefined();
    });

});
