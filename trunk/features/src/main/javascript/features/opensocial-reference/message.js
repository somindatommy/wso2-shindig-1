/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*global opensocial */

/**
 * @fileoverview Representation of a message.
 */


/**
 * @class
 * Base interface for all message objects.
 *
 * <p>
 * <b>See also:</b>
 * <a href="opensocial.html#newMessage">opensocial.newMessage()</a>,
 * <a href="opensocial.html#requestSendMessage">
 * opensocial.requestSendMessage()</a>
 *
 * @name opensocial.Message
 */


/**
 * Base interface for all message objects.
 *
 * @param {string} body_or_params The main text of the message.
 * @param {Object.<opensocial.Message.Field, Object>=} opt_params Any other
 *    fields that should be set on the message object. All of the defined
 *    Fields are supported.
 * @private
 * @constructor
 * @deprecated since 1.0 see http://opensocial-resources.googlecode.com/svn/spec/1.0/Social-Gadget.xml#rfc.section.A.37.
 */
opensocial.Message = function(body_or_params, opt_params) {
  if (typeof body_or_params == 'string') {
    // We have a string
    this.fields_ = opt_params || {};
    this.fields_[opensocial.Message.Field.BODY] = body_or_params;
  } else {
    this.fields_ = body_or_params || {};
  }
};


/**
 * @static
 * @class
 * All of the fields that messages can have.
 *
 * <p>
 * <b>See also:</b>
 * <a
 * href="opensocial.Message.html#getField">opensocial.Message.getField()</a>
 * </p>
 *
 * @name opensocial.Message.Field
 * @enum {string}
 * @const
 * @deprecated since 1.0 see http://opensocial-resources.googlecode.com/svn/spec/1.0/Social-Gadget.xml#rfc.section.A.38.
 */
opensocial.Message.Field = {
  /**
   * The URL of the application that generated this message, if applicable.
   * @member opensocial.Message.Field
   */
  APP_URL: 'appUrl',

  /**
   * The main text of the message. HTML attributes are allowed and are
   * sanitized by the container.
   * @member opensocial.Message.Field
   * @const
   */
  BODY: 'body',

  /**
   * The main text of the message as a message template. Specifies the
   * message ID to use in the gadget xml.
   * @member opensocial.Message.Field
   */
  BODY_ID: 'bodyId',


  /**
   * Collection IDs this Message belongs to
   * @member opensocial.Message.Field
   */
  COLLECTION_IDS: 'collectionIds',

  /**
   * The Unique ID of this message.
   * @member opensocial.Message.Field
   */
  ID: 'id',

  /**
   * The Parent ID of this message.  Useful for message threading.
   * @member opensocial.Message.Field
   */
  PARENT_ID: 'parentId',

  /**
   * The Recipients of this message.
   * @member opensocial.Message.Field
   */
  RECIPIENTS: 'recipients',

  /**
   * The Person ID that sent this message.
   * @member opensocial.Message.Field
   */
  SENDER_ID: 'senderId',

  /**
   * The Status of this message.  Specified as an opensocial.Message.Status.
   */
  STATUS: 'status',

  /**
   * The time this message was sent.
   */
  TIME_SENT: 'timeSent',

  /**
   * The title of the message. HTML attributes are allowed and are
   * sanitized by the container.
   * @member opensocial.Message.Field
   */
  TITLE: 'title',

  /**
   * The title of the message as a message template. Specifies the
   * message ID to use in the gadget xml.
   * @member opensocial.Message.Field
   */
  TITLE_ID: 'titleId',

  /**
   * The title of the message, specified as an opensocial.Message.Type.
   * @member opensocial.Message.Field
   */
  TYPE: 'type',

  /**
   * The last updated time of this message.
   * @member opensocial.Message.Field
   */

  UPDATED: 'updated',

  /**
   * Urls associated with this message, specified as an array of opensocial.Url
   */
  URLS: 'urls'
};


/**
 * @static
 * @class
 * The types of messages that can be sent.
 *
 * @name opensocial.Message.Type
 */
opensocial.Message.Type = {
  /**
   * An email.
   *
   * @member opensocial.Message.Type
   */
  EMAIL: 'email',

  /**
   * A short private message.
   *
   * @member opensocial.Message.Type
   */
  NOTIFICATION: 'notification',

  /**
   * A message to a specific user that can be seen only by that user.
   *
   * @member opensocial.Message.Type
   */
  PRIVATE_MESSAGE: 'privateMessage',

  /**
   * A message to a specific user that can be seen by more than that user.
   * @member opensocial.Message.Type
   */
  PUBLIC_MESSAGE: 'publicMessage'
};

/**
 * @static
 * @class
 * The different status states of a message.
 * @name opensocial.Message.Status
 */

opensocial.Message.Status = {
  /**
   * A new, unread message
   * @member opensocial.Message.Status
   */
  NEW: 'new',

  /**
   * A deleted message
   * @member opensocial.Message.Status
   */
  DELETED: 'deleted',

  /**
   * A flagged message
   * @member opensocial.Message.Status
   */
  FLAGGED: 'flagged'
};

/**
 * Gets the message data that's associated with the specified key.
 *
 * @param {string} key The key to get data for;
 *   see the <a href="opensocial.Message.Field.html">Field</a> class
 * for possible values.
 * @param {Object.<opensocial.DataRequest.DataRequestFields, Object>}
 *  opt_params Additional
 *    <a href="opensocial.DataRequest.DataRequestFields.html">params</a>
 *    to pass to the request.
 * @return {string} The data.
 * @member opensocial.Message
 * @deprecated since 1.0 see http://opensocial-resources.googlecode.com/svn/spec/1.0/Social-Gadget.xml#rfc.section.A.37.1.1.
 */
opensocial.Message.prototype.getField = function(key, opt_params) {
  return opensocial.Container.getField(this.fields_, key, opt_params);
};


/**
 * Sets data for this message associated with the given key.
 *
 * @param {string} key The key to set data for.
 * @param {string} data The data to set.
 * @deprecated since 1.0 see http://opensocial-resources.googlecode.com/svn/spec/1.0/Social-Gadget.xml#rfc.section.A.37.1.2.
 */
opensocial.Message.prototype.setField = function(key, data) {
  return (this.fields_[key] = data);
};
