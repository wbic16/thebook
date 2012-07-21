//-------------------------------------------------------------------------
// thebook.js: A simple javascript framework for drafting novels.
// Author: Will Bickford
//-------------------------------------------------------------------------

var chap = 0;
var i = 0;
var writerId = 0;
var chapters = new Array();
function addChapter(id, title)
{
	chapters[id - 1] = title;
}

function addTOC()
{
	for (var i = 0; i < chapters.length; ++i)
	{
		chapterLink(i + 1);
	}
}

function chapterLink(id)
{
	var chapter = id;
	var title = chapters[id - 1];
	if (title.length > 0)
	{
		document.write("<li><a href=\"#ch" + chapter + "\">" + title + "</a></li>\n");
	}
}

function nextChapter()
{
	var chapter = writerId + 1;
	var title = chapters[writerId];
	if (title.length > 0)
	{
		document.write("<a name=\"ch" + chapter + "\"><h1>" + title + "</h1></a>\n");
	}
	writerId++;
}
