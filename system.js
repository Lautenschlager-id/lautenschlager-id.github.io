function Tab(element) {
	var expand = element.style.width == "" || element.style.width == "70px";
	
	setTimeout(function(){
		element.style.transitionDuration = '1.5s';
		element.style.width = expand ? "110px" : "70px";
	});
	
	ToggleContainer(element, expand);
}

function ToggleContainer(element, expand) {
	var container = element.parentNode.querySelector("div");
	
	if (expand)
	{
		container.classList.add("visible");
		container.classList.remove("hidden");
	}	
	else
	{
		container.classList.add("hidden");
		container.classList.remove("visible");
	}
}

var items = {};
function OneItem(prefix, id) {
	var button = document.getElementById(`btn_${prefix}_${id}`);
	button.style.backgroundColor = "#776CC9";
	
	var object = document.getElementById(`${prefix}_${id}`);
	object.classList.remove("hidden");
	
	if (!items[prefix])
		items[prefix] = [];
	
	if (items[prefix].indexOf(id) == -1)
		items[prefix].push(id);
	
	for (var item_id of items[prefix])
	{
		if (item_id != id)
		{
			var item_button = document.getElementById(`btn_${prefix}_${item_id}`);
			item_button.style.backgroundColor = "#20B0C7";

			var item = document.getElementById(`${prefix}_${item_id}`);
			item.classList.add("hidden");
		}
	}	
}