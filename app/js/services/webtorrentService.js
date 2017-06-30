angular.module('mrmagnet').factory('webtorrentService', function ($http, $injector) {
    "use strict";

    let WebTorrent = require('webtorrent');
    let client = new WebTorrent();

    function addMagnet (magnetUrl, callback) {
        return client.add(magnetUrl, function () {
            callback.apply();
        });
    }

    function getAllTorrents () {
        return client.torrents;
    }

    function seedingFiles (file, callback) {
        return client.seed(file, callback);
    }

    return {
        addMagnet: addMagnet,
        getAllTorrents: getAllTorrents,
        seedingFiles: seedingFiles
    }
});
