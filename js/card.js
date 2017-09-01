function Card(id, name) {
    var self = this;

    this.id = id;
    this.name = name || 'No name given';
    this.$element = createCard();

    function createCard() {
        var $card = $('<li>').addClass('card');
        $card.attr('id', id);
        var $cardDescription = $('<p>').addClass('card-description').text(self.name);
        var $cardDelete = $('<button>').addClass('btn-delete').html('<i class="fa fa-trash"></i>');
        var $cardEdit = $('<button>').addClass('btn-edit').html('<i class="fa fa-edit"></i>');

        $cardDelete.click(function(){
            self.removeCard();
        });

        $cardEdit.click(function(){
            self.editCard();
        });

        $card.append($cardDelete)
            .append($cardEdit)
            .append($cardDescription);
        
        return $card;
    }
}

Card.prototype.removeCard = function() {
    var self = this;
    myConfirm('Remove this card?', function(){
        $.ajax({
            url: baseUrl + '/card/' + self.id,
            method: 'DELETE',
            success: function(){
                self.$element.remove();
            }
        });
    });
}

Card.prototype.editCard = function() {
    var self = this;
    myPrompt('Enter new name of the card', function(name){
        if (name != self.name) {
            $.ajax({
                url: baseUrl + '/card/' + self.id,
                type: 'PUT',
                data: {
                    name: name,
                    bootcamp_kanban_column_id: self.$element[0].parentNode.id
                },
                success: function(response) {
                    self.$element.children('.card-description').text(name);
                    self.name = name;
                }
            });
        }
    }, this.name);
}

// moveItem(itemId, targetColumnId);

moveItem = function(itemId, itemName, targetColumnId) {
    $.ajax({
        url: baseUrl + '/card/' + self.itemId,
        type: 'PUT',
        data: {
            name: itemName,
            bootcamp_kanban_column_id: self.targetColumnId
        }
    });
}