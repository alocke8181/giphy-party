class gifParty {
    constructor(){
        this.key = "SjSnoVEDAP9n7hZz0HrSSPIl1E3Lkner";
        this.url = "https://api.giphy.com/v1/gifs/search";

        this.$searchBox = $("#searchBox");
        this.$submitButton = $("#submitButton");
        this.$resetButton = $("#resetButton");
        this.gallery = $("#gallery");
        const self = this;
        this.$submitButton.click(function(){
            self.searchForGif()});
        this.$resetButton.click(function(){
            self.clearGifs()});
    }

    async searchForGif(){
        //Get the search query
        let query = this.$searchBox.val();
        try{
            let resultData = await axios.get(this.url,{params:{api_key : this.key, q : query, limit : 1}});
            let imageURL = resultData.data.data[0].images.fixed_height.url;
            let newGIF = $(`<img src="${imageURL}">`);
            this.gallery.append(newGIF);
        }
        catch(error){
            console.log(error);
            alert("Something went wrong!");
        }
    }

    clearGifs(){
        let gifs = this.gallery.children();
        for(let i =0; i < gifs.length; i++){
            gifs[i].remove();
        }
    }

}

const gifPage = new gifParty();