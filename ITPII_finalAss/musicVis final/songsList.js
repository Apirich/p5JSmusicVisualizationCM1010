//container function for the visualisations
function SongsList()
{
	//array to store songs
	this.songs = [];
	//currently selected vis. set to null until song loaded in
	this.selectedSong = null;

	//add a new song to the array
	//@param vis: a visualisation object
	this.add = function(song)
    {
		this.songs.push(song);
		//if selectedVisual is null set the new song as the 
		//current song
		if(this.selectedSong == null)
        {
			this.selectSong(song.name);
		}
	};

	//select a visualisation using it name property
	//@param visName: name property of the visualisation
	this.selectSong = function(songName)
    {
		for(var i = 0; i < this.songs.length; i++)
        {
			if(songName == this.songs[i].name)
            {
				this.selectedSong = this.songs[i];
			}
		}
	};
}