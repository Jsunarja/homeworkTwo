var PROVIDER = (function() {
    var _allData = {};
    var _currentPage='';

    var _getData = function(callback){
        $.getJSON("data/data.json", function(data){

        }).fail(function(error){
            
        }).done(function(data){

        }).done(function(data){
            _allData = data;
            callback();
        });
    };

    var _getmainNav = function(){
        return _allData.mainNav
    }

    var _getPageContent = function(nameOfPage){
        var content = '';
        $.each(_allData.pages, function(idx, page){
            if(nameOfPage === page.pageName){
                content = page.content;
                _currentPage = page.pageName;
            }
        });
        return content;
    };

    var _getCurrentPageName = function(){
        return _getCurrentPageName;
    }

    return{
        getData : _getData,
        getmainNav : _getmainNav,
        getpageContent : _getPageContent,
        getCurrentPageName : _getCurrentPageName
    }
})();