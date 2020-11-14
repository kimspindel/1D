const util = {
    randomFloat: function(a, b) {
        // returns a random float between a and b
        // includes a but not b
        var number = Math.random();
        if(a == undefined && b == undefined) {
            return number;
        }
        else if(b == undefined) {
            b = a;
            a = 0;
        }
        var span = b - a;
        number = number * span;
        number = number + a;
        return number;
    },
    randomInt: function(a, b) {
        // returns a random int between a and b
        // includes a but not b
        var number = util.randomFloat(a, b);
        number = Math.floor(number);
        return number;
    },
    randomBool: function() {
        return util.randomInt(0, 2);
    },
    recentreText: function(text, position) {
        if(position == undefined) {
            text.x = text.x - text.width / 2;
            text.y = text.y - text.height / 2;
        }
        else {
            text.x = position.x - text.width / 2;
            text.y = position.y - text.height / 2;
        }
    },
    rightAlignText: function(text, rightBoundary) {
        if(rightBoundary == undefined)
            text.x = text.x - text.width;
        else
            text.x = rightBoundary - text.width;
    },
    createTileBg: function(gameGroup, length, spriteName, tileSize, tileScale, xOffset, yOffset) {
        for(var i = 0; i < length; ++i) {
            const x = i * tileSize + world.xOffset;
            tile = gameGroup.create(x, yOffset, spriteName);
            tile.scale.set(tileScale, tileScale);
        }
    }
};
