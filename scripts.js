﻿$(function() {

    // function randomString() {
    //     var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    //     var str = '';
    //     for (i = 0; i < 10; i++) {
    //         str += chars[Math.floor(Math.random() * chars.length)];
    //     }
    //     return str;
    // }

    // function Column(name) {
    //     var self = this;
    //     this.id = randomString();
    //     this.name = name;
    //     this.$element = createColumn();
    //     function createColumn() {
    //         var $column = $('<div>').addClass('column');
    //         var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
    //         var $columnCardList = $('<ul>').addClass('column-card-list');
    //         var $columnDelete = $('<button>').addClass('btn-delete').html('<i class="fa fa-trash"></i>');
    //         var $columnAddCard = $('<button>').addClass('add-card').text('+');            

    //         $columnDelete.click(function() {
    //             self.removeColumn();
    //         });

    //         $columnAddCard.click(function() {
    //             myPrompt('Enter the name of the card', function(name){
    //                 if (name) {
    //                     self.addCard(new Card(name));
    //                 }
    //             })
    //         });

    //         $column.append($columnTitle)
    //             .append($columnDelete)
    //             .append($columnCardList)
    //             .append($columnAddCard);

    //         return $column;
    //     }
    // }

    // Column.prototype.addCard = function(card) {
    //     this.$element.children('ul').append(card.$element);
    // }

    // Column.prototype.removeColumn = function() {
    //     this.$element.remove();
    // }


    // function Card(description) {
    //     var self = this;

    //     this.id = randomString();
    //     this.description = description;
    //     this.$element = createCard();

    //     function createCard() {
    //         var $card = $('<li>').addClass('card');
    //         var $cardDescription = $('<p>').addClass('card-description').text(self.description);
    //         var $cardDelete = $('<button>').addClass('btn-delete').html('<i class="fa fa-trash"></i>');

    //         $cardDelete.click(function(){
    //             self.removeCard();
    //         });

    //         $card.append($cardDelete)
    //             .append($cardDescription);
            
    //         return $card;
    //     }
    // }

    // Card.prototype.removeCard = function() {
    //     this.$element.remove();
    // }

    // function myPrompt (text, func) {
    //     var $input = $('.prompt input');
    //     $('.prompt').css('visibility', 'visible');
    //     $('.prompt h2').text(text);
    //     $('.board').css('opacity', '0.5');
    //     $input.focus();
    //     $input.val('');
    //     $query = $(window).keyup(function(event) {
    //         if(event.key == 'Enter') {
    //             $('.prompt').css('visibility', 'hidden');
    //             $('.board').css('opacity', '1');
    //             $query.off();
    //             func($input.val());
    //         } else if (event.key == 'Escape') {
    //             $('.prompt').css('visibility', 'hidden');
    //             $('.board').css('opacity', '1');
    //             $query.off();
    //         }
    //     })
    // }


    // main

    // var board = {
    //     name: 'Kanban board',
    //     addColumn: function(column) {
    //         this.$element.append(column.$element);
    //         initSortable();
    //         initSortable2();
    //     },
    //     $element: $('#board .column-container')
    // }

    // function initSortable() {
    //     $('.column-card-list').sortable({
    //         connectWith: '.column-card-list',
    //         placeholder: 'card-placeholder'
    //     }).disableSelection();
    // }

    // function initSortable2() {
    //     $('.column-container').sortable({
    //         connectWith: '.column-container',
    //         placeholder: 'column-placeholder'
    //     }).disableSelection();
    // }

    // $('.create-column').click(function() {
    //     myPrompt('Enter a column name', function(name){
    //         if(name) {
    //             var column = new Column(name);
    //             board.addColumn(column);
    //         }
    //     })
    // });


    // // TWORZENIE KOLUMN
    // var todoColumn = new Column('To do');
    // var doingColumn = new Column('Doing');
    // var doneColumn = new Column('Done');

    // // DODAWANIE KOLUMN DO TABLICY
    // board.addColumn(todoColumn);
    // board.addColumn(doingColumn);
    // board.addColumn(doneColumn);

    // // TWORZENIE NOWYCH EGZEMPLARZY KART
    // var card1 = new Card('New task');
    // var card2 = new Card('Create kanban boards');

    // // DODAWANIE KART DO KOLUMN
    // todoColumn.addCard(card1);
    // doingColumn.addCard(card2);

})