
function Column(id, name) {
    var self = this;
    this.id = id;
    this.name = name || 'No name given';
    this.$element = createColumn();
    
    function createColumn() {
        var $column = $('<div>').addClass('column');
        var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
        var $columnCardList = $('<ul>').addClass('column-card-list');
        $columnCardList.attr('id', id);
        var $columnEdit = $('<button>').addClass('btn-edit').html('<i class="fa fa-edit"></i>');
        var $columnDelete = $('<button>').addClass('btn-delete').html('<i class="fa fa-trash"></i>');
        var $columnAddCard = $('<button>').addClass('add-card').text('+');            

        $columnDelete.click(function() {
            self.removeColumn();
        });

        $columnEdit.click(function() {
            self.editColumn();
        });

        $columnAddCard.click(function() {
            myPrompt('Enter the name of the card', function(name){
                if (name) {
                    $.ajax({
                        url: baseUrl + '/card',
                        method: 'POST',
                        data: {
                            name: name,
                            bootcamp_kanban_column_id: self.id
                        },
                        success: function(response) {
                    self.addCard(new Card(response.id, name));
                        }
                    });
                }
            })
        });

        $column.append($columnTitle)
            .append($columnEdit)
            .append($columnDelete)
            .append($columnCardList)
            .append($columnAddCard);

        return $column;
    }
}

Column.prototype.addCard = function(card) {
    this.$element.children('ul').append(card.$element);
}

Column.prototype.removeColumn = function() {
    var self = this;
    myConfirm('Remove this column?', function(){
        $.ajax({
            url: baseUrl + '/column/' + self.id,
            method: 'DELETE',
            success: function(){
                self.$element.remove();
            }
        });
    })
}

Column.prototype.editColumn = function() {
    var self = this;
    myPrompt('Enter new name of this column', function(name){
        if (name != self.name) {
            $.ajax({
                url: baseUrl + '/column/' + self.id,
                type: 'PUT',
                data: {
                    name: name
                },
                success: function(response) {
                    self.$element.children('.column-title').text(name);
                    self.name = name;
                }
            });
        }
    }, this.name); 
}
