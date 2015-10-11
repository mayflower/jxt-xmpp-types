'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _xmppConstants = require('xmpp-constants');

var VERSION = {
    client: _xmppConstants.Namespace.CLIENT,
    server: _xmppConstants.Namespace.SERVER,
    component: _xmppConstants.Namespace.COMPONENT
};

exports['default'] = function (JXT) {

    // ----------------------------------------------------------------
    // Shortcuts for common extension calls
    // ----------------------------------------------------------------

    JXT.extendMessage = function (JXTClass, multiName) {
        var _this = this;

        this.withMessage(function (Message) {

            _this.extend(Message, JXTClass, multiName);
        });
    };

    JXT.extendPresence = function (JXTClass, multiName) {
        var _this2 = this;

        this.withPresence(function (Presence) {

            _this2.extend(Presence, JXTClass, multiName);
        });
    };

    JXT.extendIQ = function (JXTClass, multiName) {
        var _this3 = this;

        this.withIQ(function (IQ) {

            _this3.extend(IQ, JXTClass, multiName);
        });
    };

    JXT.extendStreamFeatures = function (JXTClass) {
        var _this4 = this;

        this.withStreamFeatures(function (StreamFeatures) {

            _this4.extend(StreamFeatures, JXTClass);
        });
    };

    JXT.extendPubsubItem = function (JXTClass) {
        var _this5 = this;

        this.withPubsubItem(function (PubsubItem) {

            _this5.extend(PubsubItem, JXTClass);
        });
    };

    // ----------------------------------------------------------------
    // Shortcuts for common withDefinition calls
    // ----------------------------------------------------------------

    JXT.withIQ = function (cb) {

        this.withDefinition('iq', _xmppConstants.Namespace.CLIENT, cb);
        this.withDefinition('iq', _xmppConstants.Namespace.COMPONENT, cb);
    };

    JXT.withMessage = function (cb) {

        this.withDefinition('message', _xmppConstants.Namespace.CLIENT, cb);
        this.withDefinition('message', _xmppConstants.Namespace.COMPONENT, cb);
    };

    JXT.withPresence = function (cb) {

        this.withDefinition('presence', _xmppConstants.Namespace.CLIENT, cb);
        this.withDefinition('presence', _xmppConstants.Namespace.COMPONENT, cb);
    };

    JXT.withStreamFeatures = function (cb) {

        this.withDefinition('features', _xmppConstants.Namespace.STREAM, cb);
    };

    JXT.withStanzaError = function (cb) {

        this.withDefinition('error', _xmppConstants.Namespace.CLIENT, cb);
        this.withDefinition('error', _xmppConstants.Namespace.COMPONENT, cb);
    };

    JXT.withDataForm = function (cb) {

        this.withDefinition('x', _xmppConstants.Namespace.DATAFORM, cb);
    };

    JXT.withPubsubItem = function (cb) {

        this.withDefinition('item', _xmppConstants.Namespace.PUBSUB, cb);
        this.withDefinition('item', _xmppConstants.Namespace.PUBSUB_EVENT, cb);
    };

    // ----------------------------------------------------------------
    // Shortcuts for common getDefinition calls
    // ----------------------------------------------------------------

    JXT.getMessage = function () {
        var version = arguments.length <= 0 || arguments[0] === undefined ? 'client' : arguments[0];

        return this.getDefinition('message', VERSION[version]);
    };

    JXT.getPresence = function () {
        var version = arguments.length <= 0 || arguments[0] === undefined ? 'client' : arguments[0];

        return this.getDefinition('presence', VERSION[version]);
    };

    JXT.getIQ = function () {
        var version = arguments.length <= 0 || arguments[0] === undefined ? 'client' : arguments[0];

        return this.getDefinition('iq', VERSION[version]);
    };

    JXT.getStreamError = function () {

        return this.getDefinition('error', _xmppConstants.Namespace.STREAM);
    };

    // For backward compatibility
    JXT.getIq = JXT.getIQ;
    JXT.withIq = JXT.withIQ;
};

module.exports = exports['default'];
//# sourceMappingURL=shortcuts.js.map