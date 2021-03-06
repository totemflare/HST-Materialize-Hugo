webpackJsonp([0,1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var arr = [];

var document = window.document;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "2.2.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isPlainObject: function( obj ) {
		var key;

		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		// Not own constructor property must be Object
		if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {

			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf( "use strict" ) === 1 ) {
				script = document.createElement( "script" );
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {

				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval

				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {

						// Inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE9-10 only
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	register: function( owner, initial ) {
		var value = initial || {};

		// If it is a node unlikely to be stringify-ed or looped over
		// use plain assignment
		if ( owner.nodeType ) {
			owner[ this.expando ] = value;

		// Otherwise secure it in a non-enumerable, non-writable property
		// configurability must be true to allow the property to be
		// deleted with the delete operator
		} else {
			Object.defineProperty( owner, this.expando, {
				value: value,
				writable: true,
				configurable: true
			} );
		}
		return owner[ this.expando ];
	},
	cache: function( owner ) {

		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return an empty object.
		if ( !acceptData( owner ) ) {
			return {};
		}

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ prop ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :
			owner[ this.expando ] && owner[ this.expando ][ key ];
	},
	access: function( owner, key, value ) {
		var stored;

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase( key ) );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key === undefined ) {
			this.register( owner );

		} else {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );

				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;

			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <= 35-45+
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://code.google.com/p/chromium/issues/detail?id=378607
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data, camelKey;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// with the key as-is
				data = dataUser.get( elem, key ) ||

					// Try to find dashed key if it exists (gh-2779)
					// This is for 2.2.x only
					dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

				if ( data !== undefined ) {
					return data;
				}

				camelKey = jQuery.camelCase( key );

				// Attempt to get data from the cache
				// with the key camelized
				data = dataUser.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			camelKey = jQuery.camelCase( key );
			this.each( function() {

				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = dataUser.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				dataUser.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
					dataUser.set( this, key, value );
				}
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE9
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
			"screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {
	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {
		div.style.cssText =

			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );
	}

	jQuery.extend( support, {
		pixelPosition: function() {

			// This test is executed only once but we still do memoizing
			// since we can use the boxSizingReliable pre-computing.
			// No need to check if the test was already performed, though.
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
			// since that compresses better and they're computed together anyway.
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		},
		reliableMarginRight: function() {

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// This support function is only executed once so no memoizing is needed.
			var ret,
				marginDiv = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			marginDiv.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;margin:0;border:0;padding:0";
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";
			documentElement.appendChild( container );

			ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

			documentElement.removeChild( container );
			div.removeChild( marginDiv );

			return ret;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );
	ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

	// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
		ret = jQuery.style( elem, name );
	}

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// http://dev.w3.org/csswg/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE9-11+
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = dataPriv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = dataPriv.access(
					elem,
					"olddisplay",
					defaultDisplay( elem.nodeName )
				);
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				dataPriv.set(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = dataPriv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;

			dataPriv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
		opt.duration : opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE8-11+
			// IE throws exception if url is malformed, e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE8-11+
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


jQuery.expr.filters.hidden = function( elem ) {
	return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE9
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE9
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		box = elem.getBoundingClientRect();
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},
	size: function() {
		return this.length;
	}
} );

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Bold.eot";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Light.eot";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Medium.eot";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Regular.eot";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Thin.eot";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {"sourceMap":true});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js?importLoaders=1&sourceMap!../../../postcss-loader/index.js?!../../../sass-loader/lib/loader.js?sourceMap!./materialize.min.css", function() {
			var newContent = require("!!../../../css-loader/index.js?importLoaders=1&sourceMap!../../../postcss-loader/index.js?!../../../sass-loader/lib/loader.js?sourceMap!./materialize.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {"sourceMap":true});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?importLoaders=1&sourceMap!../../node_modules/postcss-loader/index.js?!../../node_modules/sass-loader/lib/loader.js?sourceMap!./styles.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?importLoaders=1&sourceMap!../../node_modules/postcss-loader/index.js?!../../node_modules/sass-loader/lib/loader.js?sourceMap!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "/*!\n * Materialize v0.98.0 (http://materializecss.com)\n * Copyright 2014-2015 Materialize\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\n */\n.materialize-red {\n  background-color: #e51c23 !important; }\n.materialize-red-text {\n  color: #e51c23 !important; }\n.materialize-red.lighten-5 {\n  background-color: #fdeaeb !important; }\n.materialize-red-text.text-lighten-5 {\n  color: #fdeaeb !important; }\n.materialize-red.lighten-4 {\n  background-color: #f8c1c3 !important; }\n.materialize-red-text.text-lighten-4 {\n  color: #f8c1c3 !important; }\n.materialize-red.lighten-3 {\n  background-color: #f3989b !important; }\n.materialize-red-text.text-lighten-3 {\n  color: #f3989b !important; }\n.materialize-red.lighten-2 {\n  background-color: #ee6e73 !important; }\n.materialize-red-text.text-lighten-2 {\n  color: #ee6e73 !important; }\n.materialize-red.lighten-1 {\n  background-color: #ea454b !important; }\n.materialize-red-text.text-lighten-1 {\n  color: #ea454b !important; }\n.materialize-red.darken-1 {\n  background-color: #d0181e !important; }\n.materialize-red-text.text-darken-1 {\n  color: #d0181e !important; }\n.materialize-red.darken-2 {\n  background-color: #b9151b !important; }\n.materialize-red-text.text-darken-2 {\n  color: #b9151b !important; }\n.materialize-red.darken-3 {\n  background-color: #a21318 !important; }\n.materialize-red-text.text-darken-3 {\n  color: #a21318 !important; }\n.materialize-red.darken-4 {\n  background-color: #8b1014 !important; }\n.materialize-red-text.text-darken-4 {\n  color: #8b1014 !important; }\n.red {\n  background-color: #F44336 !important; }\n.red-text {\n  color: #F44336 !important; }\n.red.lighten-5 {\n  background-color: #FFEBEE !important; }\n.red-text.text-lighten-5 {\n  color: #FFEBEE !important; }\n.red.lighten-4 {\n  background-color: #FFCDD2 !important; }\n.red-text.text-lighten-4 {\n  color: #FFCDD2 !important; }\n.red.lighten-3 {\n  background-color: #EF9A9A !important; }\n.red-text.text-lighten-3 {\n  color: #EF9A9A !important; }\n.red.lighten-2 {\n  background-color: #E57373 !important; }\n.red-text.text-lighten-2 {\n  color: #E57373 !important; }\n.red.lighten-1 {\n  background-color: #EF5350 !important; }\n.red-text.text-lighten-1 {\n  color: #EF5350 !important; }\n.red.darken-1 {\n  background-color: #E53935 !important; }\n.red-text.text-darken-1 {\n  color: #E53935 !important; }\n.red.darken-2 {\n  background-color: #D32F2F !important; }\n.red-text.text-darken-2 {\n  color: #D32F2F !important; }\n.red.darken-3 {\n  background-color: #C62828 !important; }\n.red-text.text-darken-3 {\n  color: #C62828 !important; }\n.red.darken-4 {\n  background-color: #B71C1C !important; }\n.red-text.text-darken-4 {\n  color: #B71C1C !important; }\n.red.accent-1 {\n  background-color: #FF8A80 !important; }\n.red-text.text-accent-1 {\n  color: #FF8A80 !important; }\n.red.accent-2 {\n  background-color: #FF5252 !important; }\n.red-text.text-accent-2 {\n  color: #FF5252 !important; }\n.red.accent-3 {\n  background-color: #FF1744 !important; }\n.red-text.text-accent-3 {\n  color: #FF1744 !important; }\n.red.accent-4 {\n  background-color: #D50000 !important; }\n.red-text.text-accent-4 {\n  color: #D50000 !important; }\n.pink {\n  background-color: #e91e63 !important; }\n.pink-text {\n  color: #e91e63 !important; }\n.pink.lighten-5 {\n  background-color: #fce4ec !important; }\n.pink-text.text-lighten-5 {\n  color: #fce4ec !important; }\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important; }\n.pink-text.text-lighten-4 {\n  color: #f8bbd0 !important; }\n.pink.lighten-3 {\n  background-color: #f48fb1 !important; }\n.pink-text.text-lighten-3 {\n  color: #f48fb1 !important; }\n.pink.lighten-2 {\n  background-color: #f06292 !important; }\n.pink-text.text-lighten-2 {\n  color: #f06292 !important; }\n.pink.lighten-1 {\n  background-color: #ec407a !important; }\n.pink-text.text-lighten-1 {\n  color: #ec407a !important; }\n.pink.darken-1 {\n  background-color: #d81b60 !important; }\n.pink-text.text-darken-1 {\n  color: #d81b60 !important; }\n.pink.darken-2 {\n  background-color: #c2185b !important; }\n.pink-text.text-darken-2 {\n  color: #c2185b !important; }\n.pink.darken-3 {\n  background-color: #ad1457 !important; }\n.pink-text.text-darken-3 {\n  color: #ad1457 !important; }\n.pink.darken-4 {\n  background-color: #880e4f !important; }\n.pink-text.text-darken-4 {\n  color: #880e4f !important; }\n.pink.accent-1 {\n  background-color: #ff80ab !important; }\n.pink-text.text-accent-1 {\n  color: #ff80ab !important; }\n.pink.accent-2 {\n  background-color: #ff4081 !important; }\n.pink-text.text-accent-2 {\n  color: #ff4081 !important; }\n.pink.accent-3 {\n  background-color: #f50057 !important; }\n.pink-text.text-accent-3 {\n  color: #f50057 !important; }\n.pink.accent-4 {\n  background-color: #c51162 !important; }\n.pink-text.text-accent-4 {\n  color: #c51162 !important; }\n.purple {\n  background-color: #9c27b0 !important; }\n.purple-text {\n  color: #9c27b0 !important; }\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important; }\n.purple-text.text-lighten-5 {\n  color: #f3e5f5 !important; }\n.purple.lighten-4 {\n  background-color: #e1bee7 !important; }\n.purple-text.text-lighten-4 {\n  color: #e1bee7 !important; }\n.purple.lighten-3 {\n  background-color: #ce93d8 !important; }\n.purple-text.text-lighten-3 {\n  color: #ce93d8 !important; }\n.purple.lighten-2 {\n  background-color: #ba68c8 !important; }\n.purple-text.text-lighten-2 {\n  color: #ba68c8 !important; }\n.purple.lighten-1 {\n  background-color: #ab47bc !important; }\n.purple-text.text-lighten-1 {\n  color: #ab47bc !important; }\n.purple.darken-1 {\n  background-color: #8e24aa !important; }\n.purple-text.text-darken-1 {\n  color: #8e24aa !important; }\n.purple.darken-2 {\n  background-color: #7b1fa2 !important; }\n.purple-text.text-darken-2 {\n  color: #7b1fa2 !important; }\n.purple.darken-3 {\n  background-color: #6a1b9a !important; }\n.purple-text.text-darken-3 {\n  color: #6a1b9a !important; }\n.purple.darken-4 {\n  background-color: #4a148c !important; }\n.purple-text.text-darken-4 {\n  color: #4a148c !important; }\n.purple.accent-1 {\n  background-color: #ea80fc !important; }\n.purple-text.text-accent-1 {\n  color: #ea80fc !important; }\n.purple.accent-2 {\n  background-color: #e040fb !important; }\n.purple-text.text-accent-2 {\n  color: #e040fb !important; }\n.purple.accent-3 {\n  background-color: #d500f9 !important; }\n.purple-text.text-accent-3 {\n  color: #d500f9 !important; }\n.purple.accent-4 {\n  background-color: #a0f !important; }\n.purple-text.text-accent-4 {\n  color: #a0f !important; }\n.deep-purple {\n  background-color: #673ab7 !important; }\n.deep-purple-text {\n  color: #673ab7 !important; }\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important; }\n.deep-purple-text.text-lighten-5 {\n  color: #ede7f6 !important; }\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important; }\n.deep-purple-text.text-lighten-4 {\n  color: #d1c4e9 !important; }\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important; }\n.deep-purple-text.text-lighten-3 {\n  color: #b39ddb !important; }\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important; }\n.deep-purple-text.text-lighten-2 {\n  color: #9575cd !important; }\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important; }\n.deep-purple-text.text-lighten-1 {\n  color: #7e57c2 !important; }\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important; }\n.deep-purple-text.text-darken-1 {\n  color: #5e35b1 !important; }\n.deep-purple.darken-2 {\n  background-color: #512da8 !important; }\n.deep-purple-text.text-darken-2 {\n  color: #512da8 !important; }\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important; }\n.deep-purple-text.text-darken-3 {\n  color: #4527a0 !important; }\n.deep-purple.darken-4 {\n  background-color: #311b92 !important; }\n.deep-purple-text.text-darken-4 {\n  color: #311b92 !important; }\n.deep-purple.accent-1 {\n  background-color: #b388ff !important; }\n.deep-purple-text.text-accent-1 {\n  color: #b388ff !important; }\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important; }\n.deep-purple-text.text-accent-2 {\n  color: #7c4dff !important; }\n.deep-purple.accent-3 {\n  background-color: #651fff !important; }\n.deep-purple-text.text-accent-3 {\n  color: #651fff !important; }\n.deep-purple.accent-4 {\n  background-color: #6200ea !important; }\n.deep-purple-text.text-accent-4 {\n  color: #6200ea !important; }\n.indigo {\n  background-color: #3f51b5 !important; }\n.indigo-text {\n  color: #3f51b5 !important; }\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important; }\n.indigo-text.text-lighten-5 {\n  color: #e8eaf6 !important; }\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important; }\n.indigo-text.text-lighten-4 {\n  color: #c5cae9 !important; }\n.indigo.lighten-3 {\n  background-color: #9fa8da !important; }\n.indigo-text.text-lighten-3 {\n  color: #9fa8da !important; }\n.indigo.lighten-2 {\n  background-color: #7986cb !important; }\n.indigo-text.text-lighten-2 {\n  color: #7986cb !important; }\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important; }\n.indigo-text.text-lighten-1 {\n  color: #5c6bc0 !important; }\n.indigo.darken-1 {\n  background-color: #3949ab !important; }\n.indigo-text.text-darken-1 {\n  color: #3949ab !important; }\n.indigo.darken-2 {\n  background-color: #303f9f !important; }\n.indigo-text.text-darken-2 {\n  color: #303f9f !important; }\n.indigo.darken-3 {\n  background-color: #283593 !important; }\n.indigo-text.text-darken-3 {\n  color: #283593 !important; }\n.indigo.darken-4 {\n  background-color: #1a237e !important; }\n.indigo-text.text-darken-4 {\n  color: #1a237e !important; }\n.indigo.accent-1 {\n  background-color: #8c9eff !important; }\n.indigo-text.text-accent-1 {\n  color: #8c9eff !important; }\n.indigo.accent-2 {\n  background-color: #536dfe !important; }\n.indigo-text.text-accent-2 {\n  color: #536dfe !important; }\n.indigo.accent-3 {\n  background-color: #3d5afe !important; }\n.indigo-text.text-accent-3 {\n  color: #3d5afe !important; }\n.indigo.accent-4 {\n  background-color: #304ffe !important; }\n.indigo-text.text-accent-4 {\n  color: #304ffe !important; }\n.blue {\n  background-color: #2196F3 !important; }\n.blue-text {\n  color: #2196F3 !important; }\n.blue.lighten-5 {\n  background-color: #E3F2FD !important; }\n.blue-text.text-lighten-5 {\n  color: #E3F2FD !important; }\n.blue.lighten-4 {\n  background-color: #BBDEFB !important; }\n.blue-text.text-lighten-4 {\n  color: #BBDEFB !important; }\n.blue.lighten-3 {\n  background-color: #90CAF9 !important; }\n.blue-text.text-lighten-3 {\n  color: #90CAF9 !important; }\n.blue.lighten-2 {\n  background-color: #64B5F6 !important; }\n.blue-text.text-lighten-2 {\n  color: #64B5F6 !important; }\n.blue.lighten-1 {\n  background-color: #42A5F5 !important; }\n.blue-text.text-lighten-1 {\n  color: #42A5F5 !important; }\n.blue.darken-1 {\n  background-color: #1E88E5 !important; }\n.blue-text.text-darken-1 {\n  color: #1E88E5 !important; }\n.blue.darken-2 {\n  background-color: #1976D2 !important; }\n.blue-text.text-darken-2 {\n  color: #1976D2 !important; }\n.blue.darken-3 {\n  background-color: #1565C0 !important; }\n.blue-text.text-darken-3 {\n  color: #1565C0 !important; }\n.blue.darken-4 {\n  background-color: #0D47A1 !important; }\n.blue-text.text-darken-4 {\n  color: #0D47A1 !important; }\n.blue.accent-1 {\n  background-color: #82B1FF !important; }\n.blue-text.text-accent-1 {\n  color: #82B1FF !important; }\n.blue.accent-2 {\n  background-color: #448AFF !important; }\n.blue-text.text-accent-2 {\n  color: #448AFF !important; }\n.blue.accent-3 {\n  background-color: #2979FF !important; }\n.blue-text.text-accent-3 {\n  color: #2979FF !important; }\n.blue.accent-4 {\n  background-color: #2962FF !important; }\n.blue-text.text-accent-4 {\n  color: #2962FF !important; }\n.light-blue {\n  background-color: #03a9f4 !important; }\n.light-blue-text {\n  color: #03a9f4 !important; }\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important; }\n.light-blue-text.text-lighten-5 {\n  color: #e1f5fe !important; }\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important; }\n.light-blue-text.text-lighten-4 {\n  color: #b3e5fc !important; }\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important; }\n.light-blue-text.text-lighten-3 {\n  color: #81d4fa !important; }\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important; }\n.light-blue-text.text-lighten-2 {\n  color: #4fc3f7 !important; }\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important; }\n.light-blue-text.text-lighten-1 {\n  color: #29b6f6 !important; }\n.light-blue.darken-1 {\n  background-color: #039be5 !important; }\n.light-blue-text.text-darken-1 {\n  color: #039be5 !important; }\n.light-blue.darken-2 {\n  background-color: #0288d1 !important; }\n.light-blue-text.text-darken-2 {\n  color: #0288d1 !important; }\n.light-blue.darken-3 {\n  background-color: #0277bd !important; }\n.light-blue-text.text-darken-3 {\n  color: #0277bd !important; }\n.light-blue.darken-4 {\n  background-color: #01579b !important; }\n.light-blue-text.text-darken-4 {\n  color: #01579b !important; }\n.light-blue.accent-1 {\n  background-color: #80d8ff !important; }\n.light-blue-text.text-accent-1 {\n  color: #80d8ff !important; }\n.light-blue.accent-2 {\n  background-color: #40c4ff !important; }\n.light-blue-text.text-accent-2 {\n  color: #40c4ff !important; }\n.light-blue.accent-3 {\n  background-color: #00b0ff !important; }\n.light-blue-text.text-accent-3 {\n  color: #00b0ff !important; }\n.light-blue.accent-4 {\n  background-color: #0091ea !important; }\n.light-blue-text.text-accent-4 {\n  color: #0091ea !important; }\n.cyan {\n  background-color: #00bcd4 !important; }\n.cyan-text {\n  color: #00bcd4 !important; }\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important; }\n.cyan-text.text-lighten-5 {\n  color: #e0f7fa !important; }\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important; }\n.cyan-text.text-lighten-4 {\n  color: #b2ebf2 !important; }\n.cyan.lighten-3 {\n  background-color: #80deea !important; }\n.cyan-text.text-lighten-3 {\n  color: #80deea !important; }\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important; }\n.cyan-text.text-lighten-2 {\n  color: #4dd0e1 !important; }\n.cyan.lighten-1 {\n  background-color: #26c6da !important; }\n.cyan-text.text-lighten-1 {\n  color: #26c6da !important; }\n.cyan.darken-1 {\n  background-color: #00acc1 !important; }\n.cyan-text.text-darken-1 {\n  color: #00acc1 !important; }\n.cyan.darken-2 {\n  background-color: #0097a7 !important; }\n.cyan-text.text-darken-2 {\n  color: #0097a7 !important; }\n.cyan.darken-3 {\n  background-color: #00838f !important; }\n.cyan-text.text-darken-3 {\n  color: #00838f !important; }\n.cyan.darken-4 {\n  background-color: #006064 !important; }\n.cyan-text.text-darken-4 {\n  color: #006064 !important; }\n.cyan.accent-1 {\n  background-color: #84ffff !important; }\n.cyan-text.text-accent-1 {\n  color: #84ffff !important; }\n.cyan.accent-2 {\n  background-color: #18ffff !important; }\n.cyan-text.text-accent-2 {\n  color: #18ffff !important; }\n.cyan.accent-3 {\n  background-color: #00e5ff !important; }\n.cyan-text.text-accent-3 {\n  color: #00e5ff !important; }\n.cyan.accent-4 {\n  background-color: #00b8d4 !important; }\n.cyan-text.text-accent-4 {\n  color: #00b8d4 !important; }\n.teal {\n  background-color: #009688 !important; }\n.teal-text {\n  color: #009688 !important; }\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important; }\n.teal-text.text-lighten-5 {\n  color: #e0f2f1 !important; }\n.teal.lighten-4 {\n  background-color: #b2dfdb !important; }\n.teal-text.text-lighten-4 {\n  color: #b2dfdb !important; }\n.teal.lighten-3 {\n  background-color: #80cbc4 !important; }\n.teal-text.text-lighten-3 {\n  color: #80cbc4 !important; }\n.teal.lighten-2 {\n  background-color: #4db6ac !important; }\n.teal-text.text-lighten-2 {\n  color: #4db6ac !important; }\n.teal.lighten-1 {\n  background-color: #26a69a !important; }\n.teal-text.text-lighten-1 {\n  color: #26a69a !important; }\n.teal.darken-1 {\n  background-color: #00897b !important; }\n.teal-text.text-darken-1 {\n  color: #00897b !important; }\n.teal.darken-2 {\n  background-color: #00796b !important; }\n.teal-text.text-darken-2 {\n  color: #00796b !important; }\n.teal.darken-3 {\n  background-color: #00695c !important; }\n.teal-text.text-darken-3 {\n  color: #00695c !important; }\n.teal.darken-4 {\n  background-color: #004d40 !important; }\n.teal-text.text-darken-4 {\n  color: #004d40 !important; }\n.teal.accent-1 {\n  background-color: #a7ffeb !important; }\n.teal-text.text-accent-1 {\n  color: #a7ffeb !important; }\n.teal.accent-2 {\n  background-color: #64ffda !important; }\n.teal-text.text-accent-2 {\n  color: #64ffda !important; }\n.teal.accent-3 {\n  background-color: #1de9b6 !important; }\n.teal-text.text-accent-3 {\n  color: #1de9b6 !important; }\n.teal.accent-4 {\n  background-color: #00bfa5 !important; }\n.teal-text.text-accent-4 {\n  color: #00bfa5 !important; }\n.green {\n  background-color: #4CAF50 !important; }\n.green-text {\n  color: #4CAF50 !important; }\n.green.lighten-5 {\n  background-color: #E8F5E9 !important; }\n.green-text.text-lighten-5 {\n  color: #E8F5E9 !important; }\n.green.lighten-4 {\n  background-color: #C8E6C9 !important; }\n.green-text.text-lighten-4 {\n  color: #C8E6C9 !important; }\n.green.lighten-3 {\n  background-color: #A5D6A7 !important; }\n.green-text.text-lighten-3 {\n  color: #A5D6A7 !important; }\n.green.lighten-2 {\n  background-color: #81C784 !important; }\n.green-text.text-lighten-2 {\n  color: #81C784 !important; }\n.green.lighten-1 {\n  background-color: #66BB6A !important; }\n.green-text.text-lighten-1 {\n  color: #66BB6A !important; }\n.green.darken-1 {\n  background-color: #43A047 !important; }\n.green-text.text-darken-1 {\n  color: #43A047 !important; }\n.green.darken-2 {\n  background-color: #388E3C !important; }\n.green-text.text-darken-2 {\n  color: #388E3C !important; }\n.green.darken-3 {\n  background-color: #2E7D32 !important; }\n.green-text.text-darken-3 {\n  color: #2E7D32 !important; }\n.green.darken-4 {\n  background-color: #1B5E20 !important; }\n.green-text.text-darken-4 {\n  color: #1B5E20 !important; }\n.green.accent-1 {\n  background-color: #B9F6CA !important; }\n.green-text.text-accent-1 {\n  color: #B9F6CA !important; }\n.green.accent-2 {\n  background-color: #69F0AE !important; }\n.green-text.text-accent-2 {\n  color: #69F0AE !important; }\n.green.accent-3 {\n  background-color: #00E676 !important; }\n.green-text.text-accent-3 {\n  color: #00E676 !important; }\n.green.accent-4 {\n  background-color: #00C853 !important; }\n.green-text.text-accent-4 {\n  color: #00C853 !important; }\n.light-green {\n  background-color: #8bc34a !important; }\n.light-green-text {\n  color: #8bc34a !important; }\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important; }\n.light-green-text.text-lighten-5 {\n  color: #f1f8e9 !important; }\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important; }\n.light-green-text.text-lighten-4 {\n  color: #dcedc8 !important; }\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important; }\n.light-green-text.text-lighten-3 {\n  color: #c5e1a5 !important; }\n.light-green.lighten-2 {\n  background-color: #aed581 !important; }\n.light-green-text.text-lighten-2 {\n  color: #aed581 !important; }\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important; }\n.light-green-text.text-lighten-1 {\n  color: #9ccc65 !important; }\n.light-green.darken-1 {\n  background-color: #7cb342 !important; }\n.light-green-text.text-darken-1 {\n  color: #7cb342 !important; }\n.light-green.darken-2 {\n  background-color: #689f38 !important; }\n.light-green-text.text-darken-2 {\n  color: #689f38 !important; }\n.light-green.darken-3 {\n  background-color: #558b2f !important; }\n.light-green-text.text-darken-3 {\n  color: #558b2f !important; }\n.light-green.darken-4 {\n  background-color: #33691e !important; }\n.light-green-text.text-darken-4 {\n  color: #33691e !important; }\n.light-green.accent-1 {\n  background-color: #ccff90 !important; }\n.light-green-text.text-accent-1 {\n  color: #ccff90 !important; }\n.light-green.accent-2 {\n  background-color: #b2ff59 !important; }\n.light-green-text.text-accent-2 {\n  color: #b2ff59 !important; }\n.light-green.accent-3 {\n  background-color: #76ff03 !important; }\n.light-green-text.text-accent-3 {\n  color: #76ff03 !important; }\n.light-green.accent-4 {\n  background-color: #64dd17 !important; }\n.light-green-text.text-accent-4 {\n  color: #64dd17 !important; }\n.lime {\n  background-color: #cddc39 !important; }\n.lime-text {\n  color: #cddc39 !important; }\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important; }\n.lime-text.text-lighten-5 {\n  color: #f9fbe7 !important; }\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important; }\n.lime-text.text-lighten-4 {\n  color: #f0f4c3 !important; }\n.lime.lighten-3 {\n  background-color: #e6ee9c !important; }\n.lime-text.text-lighten-3 {\n  color: #e6ee9c !important; }\n.lime.lighten-2 {\n  background-color: #dce775 !important; }\n.lime-text.text-lighten-2 {\n  color: #dce775 !important; }\n.lime.lighten-1 {\n  background-color: #d4e157 !important; }\n.lime-text.text-lighten-1 {\n  color: #d4e157 !important; }\n.lime.darken-1 {\n  background-color: #c0ca33 !important; }\n.lime-text.text-darken-1 {\n  color: #c0ca33 !important; }\n.lime.darken-2 {\n  background-color: #afb42b !important; }\n.lime-text.text-darken-2 {\n  color: #afb42b !important; }\n.lime.darken-3 {\n  background-color: #9e9d24 !important; }\n.lime-text.text-darken-3 {\n  color: #9e9d24 !important; }\n.lime.darken-4 {\n  background-color: #827717 !important; }\n.lime-text.text-darken-4 {\n  color: #827717 !important; }\n.lime.accent-1 {\n  background-color: #f4ff81 !important; }\n.lime-text.text-accent-1 {\n  color: #f4ff81 !important; }\n.lime.accent-2 {\n  background-color: #eeff41 !important; }\n.lime-text.text-accent-2 {\n  color: #eeff41 !important; }\n.lime.accent-3 {\n  background-color: #c6ff00 !important; }\n.lime-text.text-accent-3 {\n  color: #c6ff00 !important; }\n.lime.accent-4 {\n  background-color: #aeea00 !important; }\n.lime-text.text-accent-4 {\n  color: #aeea00 !important; }\n.yellow {\n  background-color: #ffeb3b !important; }\n.yellow-text {\n  color: #ffeb3b !important; }\n.yellow.lighten-5 {\n  background-color: #fffde7 !important; }\n.yellow-text.text-lighten-5 {\n  color: #fffde7 !important; }\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important; }\n.yellow-text.text-lighten-4 {\n  color: #fff9c4 !important; }\n.yellow.lighten-3 {\n  background-color: #fff59d !important; }\n.yellow-text.text-lighten-3 {\n  color: #fff59d !important; }\n.yellow.lighten-2 {\n  background-color: #fff176 !important; }\n.yellow-text.text-lighten-2 {\n  color: #fff176 !important; }\n.yellow.lighten-1 {\n  background-color: #ffee58 !important; }\n.yellow-text.text-lighten-1 {\n  color: #ffee58 !important; }\n.yellow.darken-1 {\n  background-color: #fdd835 !important; }\n.yellow-text.text-darken-1 {\n  color: #fdd835 !important; }\n.yellow.darken-2 {\n  background-color: #fbc02d !important; }\n.yellow-text.text-darken-2 {\n  color: #fbc02d !important; }\n.yellow.darken-3 {\n  background-color: #f9a825 !important; }\n.yellow-text.text-darken-3 {\n  color: #f9a825 !important; }\n.yellow.darken-4 {\n  background-color: #f57f17 !important; }\n.yellow-text.text-darken-4 {\n  color: #f57f17 !important; }\n.yellow.accent-1 {\n  background-color: #ffff8d !important; }\n.yellow-text.text-accent-1 {\n  color: #ffff8d !important; }\n.yellow.accent-2 {\n  background-color: #ff0 !important; }\n.yellow-text.text-accent-2 {\n  color: #ff0 !important; }\n.yellow.accent-3 {\n  background-color: #ffea00 !important; }\n.yellow-text.text-accent-3 {\n  color: #ffea00 !important; }\n.yellow.accent-4 {\n  background-color: #ffd600 !important; }\n.yellow-text.text-accent-4 {\n  color: #ffd600 !important; }\n.amber {\n  background-color: #ffc107 !important; }\n.amber-text {\n  color: #ffc107 !important; }\n.amber.lighten-5 {\n  background-color: #fff8e1 !important; }\n.amber-text.text-lighten-5 {\n  color: #fff8e1 !important; }\n.amber.lighten-4 {\n  background-color: #ffecb3 !important; }\n.amber-text.text-lighten-4 {\n  color: #ffecb3 !important; }\n.amber.lighten-3 {\n  background-color: #ffe082 !important; }\n.amber-text.text-lighten-3 {\n  color: #ffe082 !important; }\n.amber.lighten-2 {\n  background-color: #ffd54f !important; }\n.amber-text.text-lighten-2 {\n  color: #ffd54f !important; }\n.amber.lighten-1 {\n  background-color: #ffca28 !important; }\n.amber-text.text-lighten-1 {\n  color: #ffca28 !important; }\n.amber.darken-1 {\n  background-color: #ffb300 !important; }\n.amber-text.text-darken-1 {\n  color: #ffb300 !important; }\n.amber.darken-2 {\n  background-color: #ffa000 !important; }\n.amber-text.text-darken-2 {\n  color: #ffa000 !important; }\n.amber.darken-3 {\n  background-color: #ff8f00 !important; }\n.amber-text.text-darken-3 {\n  color: #ff8f00 !important; }\n.amber.darken-4 {\n  background-color: #ff6f00 !important; }\n.amber-text.text-darken-4 {\n  color: #ff6f00 !important; }\n.amber.accent-1 {\n  background-color: #ffe57f !important; }\n.amber-text.text-accent-1 {\n  color: #ffe57f !important; }\n.amber.accent-2 {\n  background-color: #ffd740 !important; }\n.amber-text.text-accent-2 {\n  color: #ffd740 !important; }\n.amber.accent-3 {\n  background-color: #ffc400 !important; }\n.amber-text.text-accent-3 {\n  color: #ffc400 !important; }\n.amber.accent-4 {\n  background-color: #ffab00 !important; }\n.amber-text.text-accent-4 {\n  color: #ffab00 !important; }\n.orange {\n  background-color: #ff9800 !important; }\n.orange-text {\n  color: #ff9800 !important; }\n.orange.lighten-5 {\n  background-color: #fff3e0 !important; }\n.orange-text.text-lighten-5 {\n  color: #fff3e0 !important; }\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important; }\n.orange-text.text-lighten-4 {\n  color: #ffe0b2 !important; }\n.orange.lighten-3 {\n  background-color: #ffcc80 !important; }\n.orange-text.text-lighten-3 {\n  color: #ffcc80 !important; }\n.orange.lighten-2 {\n  background-color: #ffb74d !important; }\n.orange-text.text-lighten-2 {\n  color: #ffb74d !important; }\n.orange.lighten-1 {\n  background-color: #ffa726 !important; }\n.orange-text.text-lighten-1 {\n  color: #ffa726 !important; }\n.orange.darken-1 {\n  background-color: #fb8c00 !important; }\n.orange-text.text-darken-1 {\n  color: #fb8c00 !important; }\n.orange.darken-2 {\n  background-color: #f57c00 !important; }\n.orange-text.text-darken-2 {\n  color: #f57c00 !important; }\n.orange.darken-3 {\n  background-color: #ef6c00 !important; }\n.orange-text.text-darken-3 {\n  color: #ef6c00 !important; }\n.orange.darken-4 {\n  background-color: #e65100 !important; }\n.orange-text.text-darken-4 {\n  color: #e65100 !important; }\n.orange.accent-1 {\n  background-color: #ffd180 !important; }\n.orange-text.text-accent-1 {\n  color: #ffd180 !important; }\n.orange.accent-2 {\n  background-color: #ffab40 !important; }\n.orange-text.text-accent-2 {\n  color: #ffab40 !important; }\n.orange.accent-3 {\n  background-color: #ff9100 !important; }\n.orange-text.text-accent-3 {\n  color: #ff9100 !important; }\n.orange.accent-4 {\n  background-color: #ff6d00 !important; }\n.orange-text.text-accent-4 {\n  color: #ff6d00 !important; }\n.deep-orange {\n  background-color: #ff5722 !important; }\n.deep-orange-text {\n  color: #ff5722 !important; }\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important; }\n.deep-orange-text.text-lighten-5 {\n  color: #fbe9e7 !important; }\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important; }\n.deep-orange-text.text-lighten-4 {\n  color: #ffccbc !important; }\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important; }\n.deep-orange-text.text-lighten-3 {\n  color: #ffab91 !important; }\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important; }\n.deep-orange-text.text-lighten-2 {\n  color: #ff8a65 !important; }\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important; }\n.deep-orange-text.text-lighten-1 {\n  color: #ff7043 !important; }\n.deep-orange.darken-1 {\n  background-color: #f4511e !important; }\n.deep-orange-text.text-darken-1 {\n  color: #f4511e !important; }\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important; }\n.deep-orange-text.text-darken-2 {\n  color: #e64a19 !important; }\n.deep-orange.darken-3 {\n  background-color: #d84315 !important; }\n.deep-orange-text.text-darken-3 {\n  color: #d84315 !important; }\n.deep-orange.darken-4 {\n  background-color: #bf360c !important; }\n.deep-orange-text.text-darken-4 {\n  color: #bf360c !important; }\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important; }\n.deep-orange-text.text-accent-1 {\n  color: #ff9e80 !important; }\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important; }\n.deep-orange-text.text-accent-2 {\n  color: #ff6e40 !important; }\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important; }\n.deep-orange-text.text-accent-3 {\n  color: #ff3d00 !important; }\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important; }\n.deep-orange-text.text-accent-4 {\n  color: #dd2c00 !important; }\n.brown {\n  background-color: #795548 !important; }\n.brown-text {\n  color: #795548 !important; }\n.brown.lighten-5 {\n  background-color: #efebe9 !important; }\n.brown-text.text-lighten-5 {\n  color: #efebe9 !important; }\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important; }\n.brown-text.text-lighten-4 {\n  color: #d7ccc8 !important; }\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important; }\n.brown-text.text-lighten-3 {\n  color: #bcaaa4 !important; }\n.brown.lighten-2 {\n  background-color: #a1887f !important; }\n.brown-text.text-lighten-2 {\n  color: #a1887f !important; }\n.brown.lighten-1 {\n  background-color: #8d6e63 !important; }\n.brown-text.text-lighten-1 {\n  color: #8d6e63 !important; }\n.brown.darken-1 {\n  background-color: #6d4c41 !important; }\n.brown-text.text-darken-1 {\n  color: #6d4c41 !important; }\n.brown.darken-2 {\n  background-color: #5d4037 !important; }\n.brown-text.text-darken-2 {\n  color: #5d4037 !important; }\n.brown.darken-3 {\n  background-color: #4e342e !important; }\n.brown-text.text-darken-3 {\n  color: #4e342e !important; }\n.brown.darken-4 {\n  background-color: #3e2723 !important; }\n.brown-text.text-darken-4 {\n  color: #3e2723 !important; }\n.blue-grey {\n  background-color: #607d8b !important; }\n.blue-grey-text {\n  color: #607d8b !important; }\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important; }\n.blue-grey-text.text-lighten-5 {\n  color: #eceff1 !important; }\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important; }\n.blue-grey-text.text-lighten-4 {\n  color: #cfd8dc !important; }\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important; }\n.blue-grey-text.text-lighten-3 {\n  color: #b0bec5 !important; }\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important; }\n.blue-grey-text.text-lighten-2 {\n  color: #90a4ae !important; }\n.blue-grey.lighten-1 {\n  background-color: #78909c !important; }\n.blue-grey-text.text-lighten-1 {\n  color: #78909c !important; }\n.blue-grey.darken-1 {\n  background-color: #546e7a !important; }\n.blue-grey-text.text-darken-1 {\n  color: #546e7a !important; }\n.blue-grey.darken-2 {\n  background-color: #455a64 !important; }\n.blue-grey-text.text-darken-2 {\n  color: #455a64 !important; }\n.blue-grey.darken-3 {\n  background-color: #37474f !important; }\n.blue-grey-text.text-darken-3 {\n  color: #37474f !important; }\n.blue-grey.darken-4 {\n  background-color: #263238 !important; }\n.blue-grey-text.text-darken-4 {\n  color: #263238 !important; }\n.grey {\n  background-color: #9e9e9e !important; }\n.grey-text {\n  color: #9e9e9e !important; }\n.grey.lighten-5 {\n  background-color: #fafafa !important; }\n.grey-text.text-lighten-5 {\n  color: #fafafa !important; }\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important; }\n.grey-text.text-lighten-4 {\n  color: #f5f5f5 !important; }\n.grey.lighten-3 {\n  background-color: #eee !important; }\n.grey-text.text-lighten-3 {\n  color: #eee !important; }\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important; }\n.grey-text.text-lighten-2 {\n  color: #e0e0e0 !important; }\n.grey.lighten-1 {\n  background-color: #bdbdbd !important; }\n.grey-text.text-lighten-1 {\n  color: #bdbdbd !important; }\n.grey.darken-1 {\n  background-color: #757575 !important; }\n.grey-text.text-darken-1 {\n  color: #757575 !important; }\n.grey.darken-2 {\n  background-color: #616161 !important; }\n.grey-text.text-darken-2 {\n  color: #616161 !important; }\n.grey.darken-3 {\n  background-color: #424242 !important; }\n.grey-text.text-darken-3 {\n  color: #424242 !important; }\n.grey.darken-4 {\n  background-color: #212121 !important; }\n.grey-text.text-darken-4 {\n  color: #212121 !important; }\n.black {\n  background-color: #000 !important; }\n.black-text {\n  color: #000 !important; }\n.white {\n  background-color: #fff !important; }\n.white-text {\n  color: #fff !important; }\n.transparent {\n  background-color: transparent !important; }\n.transparent-text {\n  color: transparent !important; }\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\nbody {\n  margin: 0; }\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block; }\naudio, canvas, progress, video {\n  display: inline-block;\n  vertical-align: baseline; }\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n[hidden], template {\n  display: none; }\na {\n  background-color: transparent; }\na:active, a:hover {\n  outline: 0; }\nabbr[title] {\n  border-bottom: 1px dotted; }\nb, strong {\n  font-weight: bold; }\ndfn {\n  font-style: italic; }\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\nmark {\n  background: #ff0;\n  color: #000; }\nsmall {\n  font-size: 80%; }\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\nimg {\n  border: 0; }\nsvg:not(:root) {\n  overflow: hidden; }\nfigure {\n  margin: 1em 40px; }\nhr {\n  box-sizing: content-box;\n  height: 0; }\npre {\n  overflow: auto; }\ncode, kbd, pre, samp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\nbutton, input, optgroup, select, textarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\nbutton {\n  overflow: visible; }\nbutton, select {\n  text-transform: none; }\nbutton, html input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\nbutton[disabled], html input[disabled] {\n  cursor: default; }\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\ninput {\n  line-height: normal; }\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\ninput[type=\"number\"]::-webkit-inner-spin-button, input[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\ninput[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\nlegend {\n  border: 0;\n  padding: 0; }\ntextarea {\n  overflow: auto; }\noptgroup {\n  font-weight: bold; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd, th {\n  padding: 0; }\nhtml {\n  box-sizing: border-box; }\n*, *:before, *:after {\n  box-sizing: inherit; }\nul:not(.browser-default) {\n  padding-left: 0;\n  list-style-type: none; }\nul:not(.browser-default) li {\n  list-style-type: none; }\na {\n  color: #039be5;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent; }\n.valign-wrapper {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center; }\n.valign-wrapper .valign {\n  display: block; }\n.clearfix {\n  clear: both; }\n.z-depth-0 {\n  box-shadow: none !important; }\n.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-floating, .dropdown-content, .collapsible, .side-nav {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12), 0 3px 1px -2px rgba(0, 0, 0, .2); }\n.z-depth-1-half, .btn:hover, .btn-large:hover, .btn-floating:hover {\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .14), 0 1px 7px 0 rgba(0, 0, 0, .12), 0 3px 1px -1px rgba(0, 0, 0, .2); }\n.z-depth-2 {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .3); }\n.z-depth-3 {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .3); }\n.z-depth-4, .modal {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .3); }\n.z-depth-5 {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .3); }\n.hoverable {\n  -webkit-transition: box-shadow .25s;\n  transition: box-shadow .25s;\n  box-shadow: 0; }\n.hoverable:hover {\n  -webkit-transition: box-shadow .25s;\n  transition: box-shadow .25s;\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19); }\n.divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e0e0e0; }\nblockquote {\n  margin: 20px 0;\n  padding-left: 24px;\n  padding-left: 1.5rem;\n  border-left: 5px solid #ee6e73; }\ni {\n  line-height: inherit; }\ni.left {\n  float: left;\n  margin-right: 15px; }\ni.right {\n  float: right;\n  margin-left: 15px; }\ni.tiny {\n  font-size: 16px;\n  font-size: 1rem; }\ni.small {\n  font-size: 32px;\n  font-size: 2rem; }\ni.medium {\n  font-size: 64px;\n  font-size: 4rem; }\ni.large {\n  font-size: 96px;\n  font-size: 6rem; }\nimg.responsive-img, video.responsive-video {\n  max-width: 100%;\n  height: auto; }\n.pagination li {\n  display: inline-block;\n  border-radius: 2px;\n  text-align: center;\n  vertical-align: top;\n  height: 30px; }\n.pagination li a {\n  color: #444;\n  display: inline-block;\n  font-size: 19.2px;\n  font-size: 1.2rem;\n  padding: 0 10px;\n  line-height: 30px; }\n.pagination li.active a {\n  color: #fff; }\n.pagination li.active {\n  background-color: #ee6e73; }\n.pagination li.disabled a {\n  cursor: default;\n  color: #999; }\n.pagination li i {\n  font-size: 32px;\n  font-size: 2rem; }\n.pagination li.pages ul li {\n  display: inline-block;\n  float: none; }\n@media only screen and (max-width: 992px) {\n  .pagination {\n    width: 100%; }\n  .pagination li.prev, .pagination li.next {\n    width: 10%; }\n  .pagination li.pages {\n    width: 80%;\n    overflow: hidden;\n    white-space: nowrap; } }\n.breadcrumb {\n  font-size: 18px;\n  color: rgba(255, 255, 255, .7); }\n.breadcrumb i, .breadcrumb [class^=\"mdi-\"], .breadcrumb [class*=\"mdi-\"], .breadcrumb i.material-icons {\n  display: inline-block;\n  float: left;\n  font-size: 24px; }\n.breadcrumb:before {\n  content: '\\E5CC';\n  color: rgba(255, 255, 255, .7);\n  vertical-align: top;\n  display: inline-block;\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 25px;\n  margin: 0 10px 0 8px;\n  -webkit-font-smoothing: antialiased; }\n.breadcrumb:first-child:before {\n  display: none; }\n.breadcrumb:last-child {\n  color: #fff; }\n.parallax-container {\n  position: relative;\n  overflow: hidden;\n  height: 500px; }\n.parallax {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1; }\n.parallax img {\n  display: none;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%); }\n.pin-top, .pin-bottom {\n  position: relative; }\n.pinned {\n  position: fixed !important; }\nul.staggered-list li {\n  opacity: 0; }\n.fade-in {\n  opacity: 0;\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%; }\n@media only screen and (max-width: 600px) {\n  .hide-on-small-only, .hide-on-small-and-down {\n    display: none !important; } }\n@media only screen and (max-width: 992px) {\n  .hide-on-med-and-down {\n    display: none !important; } }\n@media only screen and (min-width: 601px) {\n  .hide-on-med-and-up {\n    display: none !important; } }\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .hide-on-med-only {\n    display: none !important; } }\n@media only screen and (min-width: 993px) {\n  .hide-on-large-only {\n    display: none !important; } }\n@media only screen and (min-width: 993px) {\n  .show-on-large {\n    display: block !important; } }\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .show-on-medium {\n    display: block !important; } }\n@media only screen and (max-width: 600px) {\n  .show-on-small {\n    display: block !important; } }\n@media only screen and (min-width: 601px) {\n  .show-on-medium-and-up {\n    display: block !important; } }\n@media only screen and (max-width: 992px) {\n  .show-on-medium-and-down {\n    display: block !important; } }\n@media only screen and (max-width: 600px) {\n  .center-on-small-only {\n    text-align: center; } }\nfooter.page-footer {\n  padding-top: 20px;\n  background-color: #ee6e73; }\nfooter.page-footer .footer-copyright {\n  overflow: hidden;\n  min-height: 50px;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 0px;\n  color: rgba(255, 255, 255, .8);\n  background-color: rgba(51, 51, 51, .08); }\ntable, th, td {\n  border: none; }\ntable {\n  width: 100%;\n  display: table; }\ntable.bordered > thead > tr, table.bordered > tbody > tr {\n  border-bottom: 1px solid #d0d0d0; }\ntable.striped > tbody > tr:nth-child(odd) {\n  background-color: #f2f2f2; }\ntable.striped > tbody > tr > td {\n  border-radius: 0; }\ntable.highlight > tbody > tr {\n  -webkit-transition: background-color .25s ease;\n  transition: background-color .25s ease; }\ntable.highlight > tbody > tr:hover {\n  background-color: #f2f2f2; }\ntable.centered thead tr th, table.centered tbody tr td {\n  text-align: center; }\nthead {\n  border-bottom: 1px solid #d0d0d0; }\ntd, th {\n  padding: 15px 5px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  border-radius: 2px; }\n@media only screen and (max-width: 992px) {\n  table.responsive-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: block;\n    position: relative; }\n  table.responsive-table td:empty:before {\n    content: '\\A0'; }\n  table.responsive-table th, table.responsive-table td {\n    margin: 0;\n    vertical-align: top; }\n  table.responsive-table th {\n    text-align: left; }\n  table.responsive-table thead {\n    display: block;\n    float: left; }\n  table.responsive-table thead tr {\n    display: block;\n    padding: 0 10px 0 0; }\n  table.responsive-table thead tr th::before {\n    content: \"\\A0\"; }\n  table.responsive-table tbody {\n    display: block;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap; }\n  table.responsive-table tbody tr {\n    display: inline-block;\n    vertical-align: top; }\n  table.responsive-table th {\n    display: block;\n    text-align: right; }\n  table.responsive-table td {\n    display: block;\n    min-height: 1.25em;\n    text-align: left; }\n  table.responsive-table tr {\n    padding: 0 10px; }\n  table.responsive-table thead {\n    border: 0;\n    border-right: 1px solid #d0d0d0; }\n  table.responsive-table.bordered th {\n    border-bottom: 0;\n    border-left: 0; }\n  table.responsive-table.bordered td {\n    border-left: 0;\n    border-right: 0;\n    border-bottom: 0; }\n  table.responsive-table.bordered tr {\n    border: 0; }\n  table.responsive-table.bordered tbody tr {\n    border-right: 1px solid #d0d0d0; } }\n.collection {\n  margin: 8px 0 16px 0;\n  margin: .5rem 0 1rem 0;\n  border: 1px solid #e0e0e0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative; }\n.collection .collection-item {\n  background-color: #fff;\n  line-height: 24px;\n  line-height: 1.5rem;\n  padding: 10px 20px;\n  margin: 0;\n  border-bottom: 1px solid #e0e0e0; }\n.collection .collection-item.avatar {\n  min-height: 84px;\n  padding-left: 72px;\n  position: relative; }\n.collection .collection-item.avatar .circle {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  overflow: hidden;\n  left: 15px;\n  display: inline-block;\n  vertical-align: middle; }\n.collection .collection-item.avatar i.circle {\n  font-size: 18px;\n  line-height: 42px;\n  color: #fff;\n  background-color: #999;\n  text-align: center; }\n.collection .collection-item.avatar .title {\n  font-size: 16px; }\n.collection .collection-item.avatar p {\n  margin: 0; }\n.collection .collection-item.avatar .secondary-content {\n  position: absolute;\n  top: 16px;\n  right: 16px; }\n.collection .collection-item:last-child {\n  border-bottom: none; }\n.collection .collection-item.active {\n  background-color: #26a69a;\n  color: #eafaf9; }\n.collection .collection-item.active .secondary-content {\n  color: #fff; }\n.collection a.collection-item {\n  display: block;\n  -webkit-transition: .25s;\n  transition: .25s;\n  color: #26a69a; }\n.collection a.collection-item:not(.active):hover {\n  background-color: #ddd; }\n.collection.with-header .collection-header {\n  background-color: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 10px 20px; }\n.collection.with-header .collection-item {\n  padding-left: 30px; }\n.collection.with-header .collection-item.avatar {\n  padding-left: 72px; }\n.secondary-content {\n  float: right;\n  color: #26a69a; }\n.collapsible .collection {\n  margin: 0;\n  border: none; }\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden; }\n.video-container iframe, .video-container object, .video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n.progress {\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: #acece6;\n  border-radius: 2px;\n  margin: 8px 0 16px 0;\n  margin: .5rem 0 1rem 0;\n  overflow: hidden; }\n.progress .determinate {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #26a69a;\n  -webkit-transition: width .3s linear;\n  transition: width .3s linear; }\n.progress .indeterminate {\n  background-color: #26a69a; }\n.progress .indeterminate:before {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite; }\n.progress .indeterminate:after {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  -webkit-animation-delay: 1.15s;\n  animation-delay: 1.15s; }\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n.hide {\n  display: none !important; }\n.left-align {\n  text-align: left; }\n.right-align {\n  text-align: right; }\n.center, .center-align {\n  text-align: center; }\n.left {\n  float: left !important; }\n.right {\n  float: right !important; }\n.no-select, input[type=range], input[type=range] + .thumb {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n.circle {\n  border-radius: 50%; }\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n.truncate {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n.no-padding {\n  padding: 0 !important; }\nspan.badge {\n  min-width: 48px;\n  min-width: 3rem;\n  padding: 0 6px;\n  margin-left: 14px;\n  text-align: center;\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 22px;\n  height: 22px;\n  color: #757575;\n  float: right;\n  box-sizing: border-box; }\nspan.badge.new {\n  font-weight: 300;\n  font-size: 12.8px;\n  font-size: 0.8rem;\n  color: #fff;\n  background-color: #26a69a;\n  border-radius: 2px; }\nspan.badge.new:after {\n  content: \" new\"; }\nspan.badge[data-badge-caption]::after {\n  content: \" \" attr(data-badge-caption); }\nnav ul a span.badge {\n  display: inline-block;\n  float: none;\n  margin-left: 4px;\n  line-height: 22px;\n  height: 22px; }\n.collection-item span.badge {\n  margin-top: calc(.75rem - 11px); }\n.collapsible span.badge {\n  margin-top: calc(1.5rem - 11px); }\n.side-nav span.badge {\n  margin-top: 13px; }\n.material-icons {\n  text-rendering: optimizeLegibility;\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n.container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%; }\n@media only screen and (min-width: 601px) {\n  .container {\n    width: 85%; } }\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 70%; } }\n.container .row {\n  margin-left: -12px;\n  margin-left: -.75rem;\n  margin-right: -12px;\n  margin-right: -.75rem; }\n.section {\n  padding-top: 16px;\n  padding-top: 1rem;\n  padding-bottom: 16px;\n  padding-bottom: 1rem; }\n.section.no-pad {\n  padding: 0; }\n.section.no-pad-bot {\n  padding-bottom: 0; }\n.section.no-pad-top {\n  padding-top: 0; }\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px; }\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n.row .col {\n  float: left;\n  box-sizing: border-box;\n  padding: 0 12px;\n  padding: 0 .75rem;\n  min-height: 1px; }\n.row .col[class*=\"push-\"], .row .col[class*=\"pull-\"] {\n  position: relative; }\n.row .col.s1 {\n  width: 8.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n.row .col.s2 {\n  width: 16.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n.row .col.s3 {\n  width: 25%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n.row .col.s4 {\n  width: 33.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n.row .col.s5 {\n  width: 41.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n.row .col.s6 {\n  width: 50%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n.row .col.s7 {\n  width: 58.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n.row .col.s8 {\n  width: 66.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n.row .col.s9 {\n  width: 75%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n.row .col.s10 {\n  width: 83.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n.row .col.s11 {\n  width: 91.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n.row .col.s12 {\n  width: 100%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n.row .col.offset-s1 {\n  margin-left: 8.3333333333%; }\n.row .col.pull-s1 {\n  right: 8.3333333333%; }\n.row .col.push-s1 {\n  left: 8.3333333333%; }\n.row .col.offset-s2 {\n  margin-left: 16.6666666667%; }\n.row .col.pull-s2 {\n  right: 16.6666666667%; }\n.row .col.push-s2 {\n  left: 16.6666666667%; }\n.row .col.offset-s3 {\n  margin-left: 25%; }\n.row .col.pull-s3 {\n  right: 25%; }\n.row .col.push-s3 {\n  left: 25%; }\n.row .col.offset-s4 {\n  margin-left: 33.3333333333%; }\n.row .col.pull-s4 {\n  right: 33.3333333333%; }\n.row .col.push-s4 {\n  left: 33.3333333333%; }\n.row .col.offset-s5 {\n  margin-left: 41.6666666667%; }\n.row .col.pull-s5 {\n  right: 41.6666666667%; }\n.row .col.push-s5 {\n  left: 41.6666666667%; }\n.row .col.offset-s6 {\n  margin-left: 50%; }\n.row .col.pull-s6 {\n  right: 50%; }\n.row .col.push-s6 {\n  left: 50%; }\n.row .col.offset-s7 {\n  margin-left: 58.3333333333%; }\n.row .col.pull-s7 {\n  right: 58.3333333333%; }\n.row .col.push-s7 {\n  left: 58.3333333333%; }\n.row .col.offset-s8 {\n  margin-left: 66.6666666667%; }\n.row .col.pull-s8 {\n  right: 66.6666666667%; }\n.row .col.push-s8 {\n  left: 66.6666666667%; }\n.row .col.offset-s9 {\n  margin-left: 75%; }\n.row .col.pull-s9 {\n  right: 75%; }\n.row .col.push-s9 {\n  left: 75%; }\n.row .col.offset-s10 {\n  margin-left: 83.3333333333%; }\n.row .col.pull-s10 {\n  right: 83.3333333333%; }\n.row .col.push-s10 {\n  left: 83.3333333333%; }\n.row .col.offset-s11 {\n  margin-left: 91.6666666667%; }\n.row .col.pull-s11 {\n  right: 91.6666666667%; }\n.row .col.push-s11 {\n  left: 91.6666666667%; }\n.row .col.offset-s12 {\n  margin-left: 100%; }\n.row .col.pull-s12 {\n  right: 100%; }\n.row .col.push-s12 {\n  left: 100%; }\n@media only screen and (min-width: 601px) {\n  .row .col.m1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.offset-m1 {\n    margin-left: 8.3333333333%; }\n  .row .col.pull-m1 {\n    right: 8.3333333333%; }\n  .row .col.push-m1 {\n    left: 8.3333333333%; }\n  .row .col.offset-m2 {\n    margin-left: 16.6666666667%; }\n  .row .col.pull-m2 {\n    right: 16.6666666667%; }\n  .row .col.push-m2 {\n    left: 16.6666666667%; }\n  .row .col.offset-m3 {\n    margin-left: 25%; }\n  .row .col.pull-m3 {\n    right: 25%; }\n  .row .col.push-m3 {\n    left: 25%; }\n  .row .col.offset-m4 {\n    margin-left: 33.3333333333%; }\n  .row .col.pull-m4 {\n    right: 33.3333333333%; }\n  .row .col.push-m4 {\n    left: 33.3333333333%; }\n  .row .col.offset-m5 {\n    margin-left: 41.6666666667%; }\n  .row .col.pull-m5 {\n    right: 41.6666666667%; }\n  .row .col.push-m5 {\n    left: 41.6666666667%; }\n  .row .col.offset-m6 {\n    margin-left: 50%; }\n  .row .col.pull-m6 {\n    right: 50%; }\n  .row .col.push-m6 {\n    left: 50%; }\n  .row .col.offset-m7 {\n    margin-left: 58.3333333333%; }\n  .row .col.pull-m7 {\n    right: 58.3333333333%; }\n  .row .col.push-m7 {\n    left: 58.3333333333%; }\n  .row .col.offset-m8 {\n    margin-left: 66.6666666667%; }\n  .row .col.pull-m8 {\n    right: 66.6666666667%; }\n  .row .col.push-m8 {\n    left: 66.6666666667%; }\n  .row .col.offset-m9 {\n    margin-left: 75%; }\n  .row .col.pull-m9 {\n    right: 75%; }\n  .row .col.push-m9 {\n    left: 75%; }\n  .row .col.offset-m10 {\n    margin-left: 83.3333333333%; }\n  .row .col.pull-m10 {\n    right: 83.3333333333%; }\n  .row .col.push-m10 {\n    left: 83.3333333333%; }\n  .row .col.offset-m11 {\n    margin-left: 91.6666666667%; }\n  .row .col.pull-m11 {\n    right: 91.6666666667%; }\n  .row .col.push-m11 {\n    left: 91.6666666667%; }\n  .row .col.offset-m12 {\n    margin-left: 100%; }\n  .row .col.pull-m12 {\n    right: 100%; }\n  .row .col.push-m12 {\n    left: 100%; } }\n@media only screen and (min-width: 993px) {\n  .row .col.l1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.offset-l1 {\n    margin-left: 8.3333333333%; }\n  .row .col.pull-l1 {\n    right: 8.3333333333%; }\n  .row .col.push-l1 {\n    left: 8.3333333333%; }\n  .row .col.offset-l2 {\n    margin-left: 16.6666666667%; }\n  .row .col.pull-l2 {\n    right: 16.6666666667%; }\n  .row .col.push-l2 {\n    left: 16.6666666667%; }\n  .row .col.offset-l3 {\n    margin-left: 25%; }\n  .row .col.pull-l3 {\n    right: 25%; }\n  .row .col.push-l3 {\n    left: 25%; }\n  .row .col.offset-l4 {\n    margin-left: 33.3333333333%; }\n  .row .col.pull-l4 {\n    right: 33.3333333333%; }\n  .row .col.push-l4 {\n    left: 33.3333333333%; }\n  .row .col.offset-l5 {\n    margin-left: 41.6666666667%; }\n  .row .col.pull-l5 {\n    right: 41.6666666667%; }\n  .row .col.push-l5 {\n    left: 41.6666666667%; }\n  .row .col.offset-l6 {\n    margin-left: 50%; }\n  .row .col.pull-l6 {\n    right: 50%; }\n  .row .col.push-l6 {\n    left: 50%; }\n  .row .col.offset-l7 {\n    margin-left: 58.3333333333%; }\n  .row .col.pull-l7 {\n    right: 58.3333333333%; }\n  .row .col.push-l7 {\n    left: 58.3333333333%; }\n  .row .col.offset-l8 {\n    margin-left: 66.6666666667%; }\n  .row .col.pull-l8 {\n    right: 66.6666666667%; }\n  .row .col.push-l8 {\n    left: 66.6666666667%; }\n  .row .col.offset-l9 {\n    margin-left: 75%; }\n  .row .col.pull-l9 {\n    right: 75%; }\n  .row .col.push-l9 {\n    left: 75%; }\n  .row .col.offset-l10 {\n    margin-left: 83.3333333333%; }\n  .row .col.pull-l10 {\n    right: 83.3333333333%; }\n  .row .col.push-l10 {\n    left: 83.3333333333%; }\n  .row .col.offset-l11 {\n    margin-left: 91.6666666667%; }\n  .row .col.pull-l11 {\n    right: 91.6666666667%; }\n  .row .col.push-l11 {\n    left: 91.6666666667%; }\n  .row .col.offset-l12 {\n    margin-left: 100%; }\n  .row .col.pull-l12 {\n    right: 100%; }\n  .row .col.push-l12 {\n    left: 100%; } }\nnav {\n  color: #fff;\n  background-color: #ee6e73;\n  width: 100%;\n  height: 56px;\n  line-height: 56px; }\nnav.nav-extended {\n  height: auto; }\nnav.nav-extended .nav-wrapper {\n  min-height: 56px;\n  height: auto; }\nnav.nav-extended .nav-content {\n  position: relative;\n  line-height: normal; }\nnav a {\n  color: #fff; }\nnav i, nav [class^=\"mdi-\"], nav [class*=\"mdi-\"], nav i.material-icons {\n  display: block;\n  font-size: 24px;\n  height: 56px;\n  line-height: 56px; }\nnav .nav-wrapper {\n  position: relative;\n  height: 100%; }\n@media only screen and (min-width: 993px) {\n  nav a.button-collapse {\n    display: none; } }\nnav .button-collapse {\n  float: left;\n  position: relative;\n  z-index: 1;\n  height: 56px;\n  margin: 0 18px; }\nnav .button-collapse i {\n  height: 56px;\n  line-height: 56px; }\nnav .brand-logo {\n  position: absolute;\n  color: #fff;\n  display: inline-block;\n  font-size: 33.6px;\n  font-size: 2.1rem;\n  padding: 0;\n  white-space: nowrap; }\nnav .brand-logo.center {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%); }\n@media only screen and (max-width: 992px) {\n  nav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%); }\n  nav .brand-logo.left, nav .brand-logo.right {\n    padding: 0;\n    -webkit-transform: none;\n    transform: none; }\n  nav .brand-logo.left {\n    left: 0.5rem; }\n  nav .brand-logo.right {\n    right: 0.5rem;\n    left: auto; } }\nnav .brand-logo.right {\n  right: 8px;\n  right: 0.5rem;\n  padding: 0; }\nnav .brand-logo i, nav .brand-logo [class^=\"mdi-\"], nav .brand-logo [class*=\"mdi-\"], nav .brand-logo i.material-icons {\n  float: left;\n  margin-right: 15px; }\nnav .nav-title {\n  display: inline-block;\n  font-size: 32px;\n  padding: 28px 0; }\nnav ul {\n  margin: 0; }\nnav ul li {\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  float: left;\n  padding: 0; }\nnav ul li.active {\n  background-color: rgba(0, 0, 0, .1); }\nnav ul a {\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  font-size: 16px;\n  font-size: 1rem;\n  color: #fff;\n  display: block;\n  padding: 0 15px;\n  cursor: pointer; }\nnav ul a.btn, nav ul a.btn-large, nav ul a.btn-large, nav ul a.btn-flat, nav ul a.btn-floating {\n  margin-top: -2px;\n  margin-left: 15px;\n  margin-right: 15px; }\nnav ul a.btn > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-flat > .material-icons, nav ul a.btn-floating > .material-icons {\n  height: inherit;\n  line-height: inherit; }\nnav ul a:hover {\n  background-color: rgba(0, 0, 0, .1); }\nnav ul.left {\n  float: left; }\nnav form {\n  height: 100%; }\nnav .input-field {\n  margin: 0;\n  height: 100%; }\nnav .input-field input {\n  height: 100%;\n  font-size: 19.2px;\n  font-size: 1.2rem;\n  border: none;\n  padding-left: 32px;\n  padding-left: 2rem; }\nnav .input-field input:focus, nav .input-field input[type=text]:valid, nav .input-field input[type=password]:valid, nav .input-field input[type=email]:valid, nav .input-field input[type=url]:valid, nav .input-field input[type=date]:valid {\n  border: none;\n  box-shadow: none; }\nnav .input-field label {\n  top: 0;\n  left: 0; }\nnav .input-field label i {\n  color: rgba(255, 255, 255, .7);\n  -webkit-transition: color .3s;\n  transition: color .3s; }\nnav .input-field label.active i {\n  color: #fff; }\n.navbar-fixed {\n  position: relative;\n  height: 56px;\n  z-index: 997; }\n.navbar-fixed nav {\n  position: fixed; }\n@media only screen and (min-width: 601px) {\n  nav.nav-extended .nav-wrapper {\n    min-height: 64px; }\n  nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {\n    height: 64px;\n    line-height: 64px; }\n  .navbar-fixed {\n    height: 64px; } }\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Thin), url(" + __webpack_require__(6) + ");\n  src: url(" + __webpack_require__(6) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(26) + ") format(\"woff2\"), url(" + __webpack_require__(25) + ") format(\"woff\"), url(" + __webpack_require__(24) + ") format(\"truetype\");\n  font-weight: 200; }\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Light), url(" + __webpack_require__(3) + ");\n  src: url(" + __webpack_require__(3) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(17) + ") format(\"woff2\"), url(" + __webpack_require__(16) + ") format(\"woff\"), url(" + __webpack_require__(15) + ") format(\"truetype\");\n  font-weight: 300; }\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Regular), url(" + __webpack_require__(5) + ");\n  src: url(" + __webpack_require__(5) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(23) + ") format(\"woff2\"), url(" + __webpack_require__(22) + ") format(\"woff\"), url(" + __webpack_require__(21) + ") format(\"truetype\");\n  font-weight: 400; }\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + __webpack_require__(4) + ");\n  src: url(" + __webpack_require__(4) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(20) + ") format(\"woff2\"), url(" + __webpack_require__(19) + ") format(\"woff\"), url(" + __webpack_require__(18) + ") format(\"truetype\");\n  font-weight: 500; }\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + __webpack_require__(2) + ");\n  src: url(" + __webpack_require__(2) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(14) + ") format(\"woff2\"), url(" + __webpack_require__(13) + ") format(\"woff\"), url(" + __webpack_require__(12) + ") format(\"truetype\");\n  font-weight: 700; }\na {\n  text-decoration: none; }\nhtml {\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  color: rgba(0, 0, 0, .87); }\n@media only screen and (min-width: 0) {\n  html {\n    font-size: 14px; } }\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 14.5px; } }\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 15px; } }\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400;\n  line-height: 1.1; }\nh1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\n  font-weight: inherit; }\nh1 {\n  font-size: 67.2px;\n  font-size: 4.2rem;\n  line-height: 110%;\n  margin: 33.6px 0 26.88px 0;\n  margin: 2.1rem 0 1.68rem 0; }\nh2 {\n  font-size: 56.96px;\n  font-size: 3.56rem;\n  line-height: 110%;\n  margin: 28.48px 0 22.784px 0;\n  margin: 1.78rem 0 1.424rem 0; }\nh3 {\n  font-size: 46.72px;\n  font-size: 2.92rem;\n  line-height: 110%;\n  margin: 23.36px 0 18.688px 0;\n  margin: 1.46rem 0 1.168rem 0; }\nh4 {\n  font-size: 36.48px;\n  font-size: 2.28rem;\n  line-height: 110%;\n  margin: 18.24px 0 14.592px 0;\n  margin: 1.14rem 0 .912rem 0; }\nh5 {\n  font-size: 26.24px;\n  font-size: 1.64rem;\n  line-height: 110%;\n  margin: 13.12px 0 10.496px 0;\n  margin: .82rem 0 .656rem 0; }\nh6 {\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 110%;\n  margin: 8px 0 6.4px 0;\n  margin: .5rem 0 .4rem 0; }\nem {\n  font-style: italic; }\nstrong {\n  font-weight: 500; }\nsmall {\n  font-size: 75%; }\n.light, footer.page-footer .footer-copyright {\n  font-weight: 300; }\n.thin {\n  font-weight: 200; }\n.flow-text {\n  font-weight: 300; }\n@media only screen and (min-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem; } }\n@media only screen and (min-width: 390px) {\n  .flow-text {\n    font-size: 1.224rem; } }\n@media only screen and (min-width: 420px) {\n  .flow-text {\n    font-size: 1.248rem; } }\n@media only screen and (min-width: 450px) {\n  .flow-text {\n    font-size: 1.272rem; } }\n@media only screen and (min-width: 480px) {\n  .flow-text {\n    font-size: 1.296rem; } }\n@media only screen and (min-width: 510px) {\n  .flow-text {\n    font-size: 1.32rem; } }\n@media only screen and (min-width: 540px) {\n  .flow-text {\n    font-size: 1.344rem; } }\n@media only screen and (min-width: 570px) {\n  .flow-text {\n    font-size: 1.368rem; } }\n@media only screen and (min-width: 600px) {\n  .flow-text {\n    font-size: 1.392rem; } }\n@media only screen and (min-width: 630px) {\n  .flow-text {\n    font-size: 1.416rem; } }\n@media only screen and (min-width: 660px) {\n  .flow-text {\n    font-size: 1.44rem; } }\n@media only screen and (min-width: 690px) {\n  .flow-text {\n    font-size: 1.464rem; } }\n@media only screen and (min-width: 720px) {\n  .flow-text {\n    font-size: 1.488rem; } }\n@media only screen and (min-width: 750px) {\n  .flow-text {\n    font-size: 1.512rem; } }\n@media only screen and (min-width: 780px) {\n  .flow-text {\n    font-size: 1.536rem; } }\n@media only screen and (min-width: 810px) {\n  .flow-text {\n    font-size: 1.56rem; } }\n@media only screen and (min-width: 840px) {\n  .flow-text {\n    font-size: 1.584rem; } }\n@media only screen and (min-width: 870px) {\n  .flow-text {\n    font-size: 1.608rem; } }\n@media only screen and (min-width: 900px) {\n  .flow-text {\n    font-size: 1.632rem; } }\n@media only screen and (min-width: 930px) {\n  .flow-text {\n    font-size: 1.656rem; } }\n@media only screen and (min-width: 960px) {\n  .flow-text {\n    font-size: 1.68rem; } }\n@media only screen and (max-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem; } }\n.scale-transition {\n  transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important; }\n.scale-transition.scale-out {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  transition: -webkit-transform .2s !important;\n  -webkit-transition: -webkit-transform .2s !important;\n  transition: transform .2s !important;\n  transition: transform .2s, -webkit-transform .2s !important; }\n.scale-transition.scale-in {\n  -webkit-transform: scale(1);\n  transform: scale(1); }\n.card-panel {\n  -webkit-transition: box-shadow .25s;\n  transition: box-shadow .25s;\n  padding: 24px;\n  margin: 8px 0 16px 0;\n  margin: .5rem 0 1rem 0;\n  border-radius: 2px;\n  background-color: #fff; }\n.card {\n  position: relative;\n  margin: 8px 0 16px 0;\n  margin: .5rem 0 1rem 0;\n  background-color: #fff;\n  -webkit-transition: box-shadow .25s;\n  transition: box-shadow .25s;\n  border-radius: 2px; }\n.card .card-title {\n  font-size: 24px;\n  font-weight: 300; }\n.card .card-title.activator {\n  cursor: pointer; }\n.card.small, .card.medium, .card.large {\n  position: relative; }\n.card.small .card-image, .card.medium .card-image, .card.large .card-image {\n  max-height: 60%;\n  overflow: hidden; }\n.card.small .card-image + .card-content, .card.medium .card-image + .card-content, .card.large .card-image + .card-content {\n  max-height: 40%; }\n.card.small .card-content, .card.medium .card-content, .card.large .card-content {\n  max-height: 100%;\n  overflow: hidden; }\n.card.small .card-action, .card.medium .card-action, .card.large .card-action {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n.card.small {\n  height: 300px; }\n.card.medium {\n  height: 400px; }\n.card.large {\n  height: 500px; }\n.card.horizontal {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex; }\n.card.horizontal.small .card-image, .card.horizontal.medium .card-image, .card.horizontal.large .card-image {\n  height: 100%;\n  max-height: none;\n  overflow: visible; }\n.card.horizontal.small .card-image img, .card.horizontal.medium .card-image img, .card.horizontal.large .card-image img {\n  height: 100%; }\n.card.horizontal .card-image {\n  max-width: 50%; }\n.card.horizontal .card-image img {\n  border-radius: 2px 0 0 2px;\n  max-width: 100%;\n  width: auto; }\n.card.horizontal .card-stacked {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -ms-flex: 1;\n  -webkit-box-flex: 1;\n          flex: 1;\n  position: relative; }\n.card.horizontal .card-stacked .card-content {\n  -ms-flex-positive: 1;\n  -webkit-box-flex: 1;\n          flex-grow: 1; }\n.card.sticky-action .card-action {\n  z-index: 2; }\n.card.sticky-action .card-reveal {\n  z-index: 1;\n  padding-bottom: 64px; }\n.card .card-image {\n  position: relative; }\n.card .card-image img {\n  display: block;\n  border-radius: 2px 2px 0 0;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%; }\n.card .card-image .card-title {\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  max-width: 100%;\n  padding: 24px; }\n.card .card-content {\n  padding: 24px;\n  border-radius: 0 0 2px 2px; }\n.card .card-content p {\n  margin: 0;\n  color: inherit; }\n.card .card-content .card-title {\n  display: block;\n  line-height: 32px;\n  margin-bottom: 8px; }\n.card .card-content .card-title i {\n  line-height: 32px; }\n.card .card-action {\n  position: relative;\n  background-color: inherit;\n  border-top: 1px solid rgba(160, 160, 160, .2);\n  padding: 16px 24px; }\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {\n  color: #ffab40;\n  margin-right: 24px;\n  -webkit-transition: color .3s ease;\n  transition: color .3s ease;\n  text-transform: uppercase; }\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {\n  color: #ffd8a6; }\n.card .card-reveal {\n  padding: 24px;\n  position: absolute;\n  background-color: #fff;\n  width: 100%;\n  overflow-y: auto;\n  left: 0;\n  top: 100%;\n  height: 100%;\n  z-index: 3;\n  display: none; }\n.card .card-reveal .card-title {\n  cursor: pointer;\n  display: block; }\n#toast-container {\n  display: block;\n  position: fixed;\n  z-index: 10000; }\n@media only screen and (max-width: 600px) {\n  #toast-container {\n    min-width: 100%;\n    bottom: 0%; } }\n@media only screen and (min-width: 601px) and (max-width: 992px) {\n  #toast-container {\n    left: 5%;\n    bottom: 7%;\n    max-width: 90%; } }\n@media only screen and (min-width: 993px) {\n  #toast-container {\n    top: 10%;\n    right: 7%;\n    max-width: 86%; } }\n.toast {\n  border-radius: 2px;\n  top: 35px;\n  width: auto;\n  clear: both;\n  margin-top: 10px;\n  position: relative;\n  max-width: 100%;\n  height: auto;\n  min-height: 48px;\n  line-height: 1.5em;\n  word-break: break-all;\n  background-color: #323232;\n  padding: 10px 25px;\n  font-size: 17.6px;\n  font-size: 1.1rem;\n  font-weight: 300;\n  color: #fff;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -ms-flex-pack: justify;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n.toast .btn, .toast .btn-large, .toast .btn-flat {\n  margin: 0;\n  margin-left: 48px;\n  margin-left: 3rem; }\n.toast.rounded {\n  border-radius: 24px; }\n@media only screen and (max-width: 600px) {\n  .toast {\n    width: 100%;\n    border-radius: 0; } }\n@media only screen and (min-width: 601px) and (max-width: 992px) {\n  .toast {\n    float: left; } }\n@media only screen and (min-width: 993px) {\n  .toast {\n    float: right; } }\n.tabs {\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 48px;\n  width: 100%;\n  background-color: #fff;\n  margin: 0 auto;\n  white-space: nowrap; }\n.tabs.tabs-transparent {\n  background-color: transparent; }\n.tabs.tabs-transparent .tab a, .tabs.tabs-transparent .tab.disabled a, .tabs.tabs-transparent .tab.disabled a:hover {\n  color: rgba(255, 255, 255, .7); }\n.tabs.tabs-transparent .tab a:hover, .tabs.tabs-transparent .tab a.active {\n  color: #fff; }\n.tabs.tabs-transparent .indicator {\n  background-color: #fff; }\n.tabs.tabs-fixed-width {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex; }\n.tabs.tabs-fixed-width .tab {\n  -ms-flex-positive: 1;\n  -webkit-box-flex: 1;\n          flex-grow: 1; }\n.tabs .tab {\n  display: inline-block;\n  text-align: center;\n  line-height: 48px;\n  height: 48px;\n  padding: 0;\n  margin: 0;\n  text-transform: uppercase; }\n.tabs .tab a {\n  color: rgba(238, 110, 115, .7);\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 0 24px;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-transition: color .28s ease;\n  transition: color .28s ease; }\n.tabs .tab a:hover, .tabs .tab a.active {\n  background-color: transparent;\n  color: #ee6e73; }\n.tabs .tab.disabled a, .tabs .tab.disabled a:hover {\n  color: rgba(238, 110, 115, .7);\n  cursor: default; }\n.tabs .indicator {\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  background-color: #f6b2b5;\n  will-change: left, right; }\n@media only screen and (max-width: 992px) {\n  .tabs {\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex; }\n  .tabs .tab {\n    -ms-flex-positive: 1;\n    -webkit-box-flex: 1;\n            flex-grow: 1; }\n  .tabs .tab a {\n    padding: 0 12px; } }\n.material-tooltip {\n  padding: 10px 8px;\n  font-size: 16px;\n  font-size: 1rem;\n  z-index: 2000;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #fff;\n  min-height: 36px;\n  line-height: 120%;\n  opacity: 0;\n  position: absolute;\n  text-align: center;\n  max-width: calc(100% - 4px);\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  visibility: hidden; }\n.backdrop {\n  position: absolute;\n  opacity: 0;\n  height: 7px;\n  width: 14px;\n  border-radius: 0 0 50% 50%;\n  background-color: #323232;\n  z-index: -1;\n  -webkit-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  visibility: hidden; }\n.btn, .btn-large, .btn-flat {\n  border: none;\n  border-radius: 2px;\n  display: inline-block;\n  height: 36px;\n  line-height: 36px;\n  padding: 0 32px;\n  padding: 0 2rem;\n  text-transform: uppercase;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent; }\n.btn.disabled, .disabled.btn-large, .btn-floating.disabled, .btn-large.disabled, .btn-flat.disabled, .btn:disabled, .btn-large:disabled, .btn-floating:disabled, .btn-large:disabled, .btn-flat:disabled, .btn[disabled], [disabled].btn-large, .btn-floating[disabled], .btn-large[disabled], .btn-flat[disabled] {\n  pointer-events: none;\n  background-color: #DFDFDF !important;\n  box-shadow: none;\n  color: #9F9F9F !important;\n  cursor: default; }\n.btn.disabled:hover, .disabled.btn-large:hover, .btn-floating.disabled:hover, .btn-large.disabled:hover, .btn-flat.disabled:hover, .btn:disabled:hover, .btn-large:disabled:hover, .btn-floating:disabled:hover, .btn-large:disabled:hover, .btn-flat:disabled:hover, .btn[disabled]:hover, [disabled].btn-large:hover, .btn-floating[disabled]:hover, .btn-large[disabled]:hover, .btn-flat[disabled]:hover {\n  background-color: #DFDFDF !important;\n  color: #9F9F9F !important; }\n.btn, .btn-large, .btn-floating, .btn-large, .btn-flat {\n  outline: 0; }\n.btn i, .btn-large i, .btn-floating i, .btn-large i, .btn-flat i {\n  font-size: 20.8px;\n  font-size: 1.3rem;\n  line-height: inherit; }\n.btn:focus, .btn-large:focus, .btn-floating:focus {\n  background-color: #1d7d74; }\n.btn, .btn-large {\n  text-decoration: none;\n  color: #fff;\n  background-color: #26a69a;\n  text-align: center;\n  letter-spacing: .5px;\n  -webkit-transition: .2s ease-out;\n  transition: .2s ease-out;\n  cursor: pointer; }\n.btn:hover, .btn-large:hover {\n  background-color: #2bbbad; }\n.btn-floating {\n  display: inline-block;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  padding: 0;\n  background-color: #26a69a;\n  border-radius: 50%;\n  -webkit-transition: .3s;\n  transition: .3s;\n  cursor: pointer;\n  vertical-align: middle; }\n.btn-floating:hover {\n  background-color: #26a69a; }\n.btn-floating:before {\n  border-radius: 0; }\n.btn-floating.btn-large {\n  width: 56px;\n  height: 56px; }\n.btn-floating.btn-large i {\n  line-height: 56px; }\n.btn-floating.halfway-fab {\n  position: absolute;\n  right: 24px;\n  bottom: 0;\n  -webkit-transform: translateY(50%);\n  transform: translateY(50%); }\n.btn-floating.halfway-fab.left {\n  right: auto;\n  left: 24px; }\n.btn-floating i {\n  width: inherit;\n  display: inline-block;\n  text-align: center;\n  color: #fff;\n  font-size: 25.6px;\n  font-size: 1.6rem;\n  line-height: 40px; }\nbutton.btn-floating {\n  border: none; }\n.fixed-action-btn {\n  position: fixed;\n  right: 23px;\n  bottom: 23px;\n  padding-top: 15px;\n  margin-bottom: 0;\n  z-index: 998; }\n.fixed-action-btn.active ul {\n  visibility: visible; }\n.fixed-action-btn.horizontal {\n  padding: 0 0 0 15px; }\n.fixed-action-btn.horizontal ul {\n  text-align: right;\n  right: 64px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  height: 100%;\n  left: auto;\n  width: 500px; }\n.fixed-action-btn.horizontal ul li {\n  display: inline-block;\n  margin: 15px 15px 0 0; }\n.fixed-action-btn.toolbar {\n  padding: 0;\n  height: 56px; }\n.fixed-action-btn.toolbar.active > a i {\n  opacity: 0; }\n.fixed-action-btn.toolbar ul {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  top: 0;\n  bottom: 0; }\n.fixed-action-btn.toolbar ul li {\n  -ms-flex: 1;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: inline-block;\n  margin: 0;\n  height: 100%;\n  -webkit-transition: none;\n  transition: none; }\n.fixed-action-btn.toolbar ul li a {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  box-shadow: none;\n  color: #fff;\n  line-height: 56px;\n  z-index: 1; }\n.fixed-action-btn.toolbar ul li a i {\n  line-height: inherit; }\n.fixed-action-btn ul {\n  left: 0;\n  right: 0;\n  text-align: center;\n  position: absolute;\n  bottom: 64px;\n  margin: 0;\n  visibility: hidden; }\n.fixed-action-btn ul li {\n  margin-bottom: 15px; }\n.fixed-action-btn ul a.btn-floating {\n  opacity: 0; }\n.fixed-action-btn .fab-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 40px;\n  height: 40px;\n  background-color: #26a69a;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n  transform: scale(0); }\n.btn-flat {\n  box-shadow: none;\n  background-color: transparent;\n  color: #343434;\n  cursor: pointer;\n  -webkit-transition: background-color .2s;\n  transition: background-color .2s; }\n.btn-flat:focus, .btn-flat:active {\n  background-color: transparent; }\n.btn-flat:focus, .btn-flat:hover {\n  background-color: rgba(0, 0, 0, .1);\n  box-shadow: none; }\n.btn-flat:active {\n  background-color: rgba(0, 0, 0, .2); }\n.btn-flat.disabled {\n  background-color: transparent !important;\n  color: #b3b3b3 !important;\n  cursor: default; }\n.btn-large {\n  height: 54px;\n  line-height: 54px; }\n.btn-large i {\n  font-size: 25.6px;\n  font-size: 1.6rem; }\n.btn-block {\n  display: block; }\n.dropdown-content {\n  background-color: #fff;\n  margin: 0;\n  display: none;\n  min-width: 100px;\n  max-height: 650px;\n  overflow-y: auto;\n  opacity: 0;\n  position: absolute;\n  z-index: 999;\n  will-change: width, height; }\n.dropdown-content li {\n  clear: both;\n  color: rgba(0, 0, 0, .87);\n  cursor: pointer;\n  min-height: 50px;\n  line-height: 24px;\n  line-height: 1.5rem;\n  width: 100%;\n  text-align: left;\n  text-transform: none; }\n.dropdown-content li:hover, .dropdown-content li.active, .dropdown-content li.selected {\n  background-color: #eee; }\n.dropdown-content li.active.selected {\n  background-color: #e1e1e1; }\n.dropdown-content li.divider {\n  min-height: 0;\n  height: 1px; }\n.dropdown-content li > a, .dropdown-content li > span {\n  font-size: 16px;\n  color: #26a69a;\n  display: block;\n  line-height: 22px;\n  padding: 14px 16px; }\n.dropdown-content li > span > label {\n  top: 1px;\n  left: 0;\n  height: 18px; }\n.dropdown-content li > a > i {\n  height: inherit;\n  line-height: inherit; }\n.input-field.col .dropdown-content [type=\"checkbox\"] + label {\n  top: 1px;\n  left: 0;\n  height: 18px; }\n/*!\n * Waves v0.6.0\n * http://fian.my.id/Waves\n *\n * Copyright 2014 Alfiana E. Sibuea and other contributors\n * Released under the MIT license\n * https://github.com/fians/Waves/blob/master/LICENSE\n */\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  -webkit-transition: .3s ease-out;\n  transition: .3s ease-out; }\n.waves-effect .waves-ripple {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, .2);\n  -webkit-transition: all 0.7s ease-out;\n  transition: all 0.7s ease-out;\n  transition-property: opacity, -webkit-transform;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  pointer-events: none; }\n.waves-effect.waves-light .waves-ripple {\n  background-color: rgba(255, 255, 255, .45); }\n.waves-effect.waves-red .waves-ripple {\n  background-color: rgba(244, 67, 54, .7); }\n.waves-effect.waves-yellow .waves-ripple {\n  background-color: rgba(255, 235, 59, .7); }\n.waves-effect.waves-orange .waves-ripple {\n  background-color: rgba(255, 152, 0, .7); }\n.waves-effect.waves-purple .waves-ripple {\n  background-color: rgba(156, 39, 176, .7); }\n.waves-effect.waves-green .waves-ripple {\n  background-color: rgba(76, 175, 80, .7); }\n.waves-effect.waves-teal .waves-ripple {\n  background-color: rgba(0, 150, 136, .7); }\n.waves-effect input[type=\"button\"], .waves-effect input[type=\"reset\"], .waves-effect input[type=\"submit\"] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none; }\n.waves-effect img {\n  position: relative;\n  z-index: -1; }\n.waves-notransition {\n  -webkit-transition: none !important;\n  transition: none !important; }\n.waves-circle {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, #fff 100%, #000 100%); }\n.waves-input-wrapper {\n  border-radius: 0.2em;\n  vertical-align: bottom; }\n.waves-input-wrapper .waves-button-input {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1; }\n.waves-circle {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none; }\n.waves-block {\n  display: block; }\n.waves-effect .waves-ripple {\n  z-index: -1; }\n.modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: #fafafa;\n  padding: 0;\n  max-height: 70%;\n  width: 55%;\n  margin: auto;\n  overflow-y: auto;\n  border-radius: 2px;\n  will-change: top, opacity; }\n@media only screen and (max-width: 992px) {\n  .modal {\n    width: 80%; } }\n.modal h1, .modal h2, .modal h3, .modal h4 {\n  margin-top: 0; }\n.modal .modal-content {\n  padding: 24px; }\n.modal .modal-close {\n  cursor: pointer; }\n.modal .modal-footer {\n  border-radius: 0 0 2px 2px;\n  background-color: #fafafa;\n  padding: 4px 6px;\n  height: 56px;\n  width: 100%; }\n.modal .modal-footer .btn, .modal .modal-footer .btn-large, .modal .modal-footer .btn-flat {\n  float: right;\n  margin: 6px 0; }\n.modal-overlay {\n  position: fixed;\n  z-index: 999;\n  top: -100px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 125%;\n  width: 100%;\n  background: #000;\n  display: none;\n  will-change: opacity; }\n.modal.modal-fixed-footer {\n  padding: 0;\n  height: 70%; }\n.modal.modal-fixed-footer .modal-content {\n  position: absolute;\n  height: calc(100% - 56px);\n  max-height: 100%;\n  width: 100%;\n  overflow-y: auto; }\n.modal.modal-fixed-footer .modal-footer {\n  border-top: 1px solid rgba(0, 0, 0, .1);\n  position: absolute;\n  bottom: 0; }\n.modal.bottom-sheet {\n  top: auto;\n  bottom: -100%;\n  margin: 0;\n  width: 100%;\n  max-height: 45%;\n  border-radius: 0;\n  will-change: bottom, opacity; }\n.collapsible {\n  border-top: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  margin: 8px 0 16px 0;\n  margin: .5rem 0 1rem 0; }\n.collapsible-header {\n  display: block;\n  cursor: pointer;\n  min-height: 48px;\n  min-height: 3rem;\n  line-height: 48px;\n  line-height: 3rem;\n  padding: 0 16px;\n  padding: 0 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd; }\n.collapsible-header i {\n  width: 32px;\n  width: 2rem;\n  font-size: 25.6px;\n  font-size: 1.6rem;\n  line-height: 48px;\n  line-height: 3rem;\n  display: block;\n  float: left;\n  text-align: center;\n  margin-right: 16px;\n  margin-right: 1rem; }\n.collapsible-body {\n  display: none;\n  border-bottom: 1px solid #ddd;\n  box-sizing: border-box;\n  padding: 32px;\n  padding: 2rem; }\n.side-nav .collapsible, .side-nav.fixed .collapsible {\n  border: none;\n  box-shadow: none; }\n.side-nav .collapsible li, .side-nav.fixed .collapsible li {\n  padding: 0; }\n.side-nav .collapsible-header, .side-nav.fixed .collapsible-header {\n  background-color: transparent;\n  border: none;\n  line-height: inherit;\n  height: inherit;\n  padding: 0 16px; }\n.side-nav .collapsible-header:hover, .side-nav.fixed .collapsible-header:hover {\n  background-color: rgba(0, 0, 0, .05); }\n.side-nav .collapsible-header i, .side-nav.fixed .collapsible-header i {\n  line-height: inherit; }\n.side-nav .collapsible-body, .side-nav.fixed .collapsible-body {\n  border: 0;\n  background-color: #fff; }\n.side-nav .collapsible-body li a, .side-nav.fixed .collapsible-body li a {\n  padding: 0 23.5px 0 31px; }\n.collapsible.popout {\n  border: none;\n  box-shadow: none; }\n.collapsible.popout > li {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);\n  margin: 0 24px;\n  -webkit-transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94); }\n.collapsible.popout > li.active {\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .18), 0 4px 15px 0 rgba(0, 0, 0, .15);\n  margin: 16px 0; }\n.chip {\n  display: inline-block;\n  height: 32px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, .6);\n  line-height: 32px;\n  padding: 0 12px;\n  border-radius: 16px;\n  background-color: #e4e4e4;\n  margin-bottom: 5px;\n  margin-right: 5px; }\n.chip img {\n  float: left;\n  margin: 0 8px 0 -12px;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%; }\n.chip .close {\n  cursor: pointer;\n  float: right;\n  font-size: 16px;\n  line-height: 32px;\n  padding-left: 8px; }\n.chips {\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  box-shadow: none;\n  margin: 0 0 20px 0;\n  min-height: 45px;\n  outline: none;\n  -webkit-transition: all .3s;\n  transition: all .3s; }\n.chips.focus {\n  border-bottom: 1px solid #26a69a;\n  box-shadow: 0 1px 0 0 #26a69a; }\n.chips:hover {\n  cursor: text; }\n.chips .chip.selected {\n  background-color: #26a69a;\n  color: #fff; }\n.chips .input {\n  background: none;\n  border: 0;\n  color: rgba(0, 0, 0, .6);\n  display: inline-block;\n  font-size: 16px;\n  font-size: 1rem;\n  height: 48px;\n  height: 3rem;\n  line-height: 32px;\n  outline: 0;\n  margin: 0;\n  padding: 0 !important;\n  width: 120px !important; }\n.chips .input:focus {\n  border: 0 !important;\n  box-shadow: none !important; }\n.prefix ~ .chips {\n  margin-left: 48px;\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem); }\n.chips:empty ~ label {\n  font-size: 12.8px;\n  font-size: 0.8rem;\n  -webkit-transform: translateY(-140%);\n  transform: translateY(-140%); }\n.materialboxed {\n  display: block;\n  cursor: zoom-in;\n  position: relative;\n  -webkit-transition: opacity .4s;\n  transition: opacity .4s;\n  -webkit-backface-visibility: hidden; }\n.materialboxed:hover:not(.active) {\n  opacity: .8; }\n.materialboxed.active {\n  cursor: zoom-out; }\n#materialbox-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #292929;\n  z-index: 1000;\n  will-change: opacity; }\n.materialbox-caption {\n  position: fixed;\n  display: none;\n  color: #fff;\n  line-height: 50px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  padding: 0% 15%;\n  height: 50px;\n  z-index: 1000;\n  -webkit-font-smoothing: antialiased; }\nselect:focus {\n  outline: 1px solid #c9f3ef; }\nbutton:focus {\n  outline: none;\n  background-color: #2ab7a9; }\nlabel {\n  font-size: 12.8px;\n  font-size: .8rem;\n  color: #9e9e9e; }\n::-webkit-input-placeholder {\n  color: #d1d1d1; }\n:-moz-placeholder {\n  color: #d1d1d1; }\n::-moz-placeholder {\n  color: #d1d1d1; }\n:-ms-input-placeholder {\n  color: #d1d1d1; }\ninput:not([type]), input[type=text], input[type=password], input[type=email], input[type=url], input[type=time], input[type=date], input[type=datetime], input[type=datetime-local], input[type=tel], input[type=number], input[type=search], textarea.materialize-textarea {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  border-radius: 0;\n  outline: none;\n  height: 48px;\n  height: 3rem;\n  width: 100%;\n  font-size: 16px;\n  font-size: 1rem;\n  margin: 0 0 20px 0;\n  padding: 0;\n  box-shadow: none;\n  box-sizing: content-box;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\ninput:not([type]):disabled, input:not([type])[readonly=\"readonly\"], input[type=text]:disabled, input[type=text][readonly=\"readonly\"], input[type=password]:disabled, input[type=password][readonly=\"readonly\"], input[type=email]:disabled, input[type=email][readonly=\"readonly\"], input[type=url]:disabled, input[type=url][readonly=\"readonly\"], input[type=time]:disabled, input[type=time][readonly=\"readonly\"], input[type=date]:disabled, input[type=date][readonly=\"readonly\"], input[type=datetime]:disabled, input[type=datetime][readonly=\"readonly\"], input[type=datetime-local]:disabled, input[type=datetime-local][readonly=\"readonly\"], input[type=tel]:disabled, input[type=tel][readonly=\"readonly\"], input[type=number]:disabled, input[type=number][readonly=\"readonly\"], input[type=search]:disabled, input[type=search][readonly=\"readonly\"], textarea.materialize-textarea:disabled, textarea.materialize-textarea[readonly=\"readonly\"] {\n  color: rgba(0, 0, 0, .26);\n  border-bottom: 1px dotted rgba(0, 0, 0, .26); }\ninput:not([type]):disabled + label, input:not([type])[readonly=\"readonly\"] + label, input[type=text]:disabled + label, input[type=text][readonly=\"readonly\"] + label, input[type=password]:disabled + label, input[type=password][readonly=\"readonly\"] + label, input[type=email]:disabled + label, input[type=email][readonly=\"readonly\"] + label, input[type=url]:disabled + label, input[type=url][readonly=\"readonly\"] + label, input[type=time]:disabled + label, input[type=time][readonly=\"readonly\"] + label, input[type=date]:disabled + label, input[type=date][readonly=\"readonly\"] + label, input[type=datetime]:disabled + label, input[type=datetime][readonly=\"readonly\"] + label, input[type=datetime-local]:disabled + label, input[type=datetime-local][readonly=\"readonly\"] + label, input[type=tel]:disabled + label, input[type=tel][readonly=\"readonly\"] + label, input[type=number]:disabled + label, input[type=number][readonly=\"readonly\"] + label, input[type=search]:disabled + label, input[type=search][readonly=\"readonly\"] + label, textarea.materialize-textarea:disabled + label, textarea.materialize-textarea[readonly=\"readonly\"] + label {\n  color: rgba(0, 0, 0, .26); }\ninput:not([type]):focus:not([readonly]), input[type=text]:focus:not([readonly]), input[type=password]:focus:not([readonly]), input[type=email]:focus:not([readonly]), input[type=url]:focus:not([readonly]), input[type=time]:focus:not([readonly]), input[type=date]:focus:not([readonly]), input[type=datetime]:focus:not([readonly]), input[type=datetime-local]:focus:not([readonly]), input[type=tel]:focus:not([readonly]), input[type=number]:focus:not([readonly]), input[type=search]:focus:not([readonly]), textarea.materialize-textarea:focus:not([readonly]) {\n  border-bottom: 1px solid #26a69a;\n  box-shadow: 0 1px 0 0 #26a69a; }\ninput:not([type]):focus:not([readonly]) + label, input[type=text]:focus:not([readonly]) + label, input[type=password]:focus:not([readonly]) + label, input[type=email]:focus:not([readonly]) + label, input[type=url]:focus:not([readonly]) + label, input[type=time]:focus:not([readonly]) + label, input[type=date]:focus:not([readonly]) + label, input[type=datetime]:focus:not([readonly]) + label, input[type=datetime-local]:focus:not([readonly]) + label, input[type=tel]:focus:not([readonly]) + label, input[type=number]:focus:not([readonly]) + label, input[type=search]:focus:not([readonly]) + label, textarea.materialize-textarea:focus:not([readonly]) + label {\n  color: #26a69a; }\ninput:not([type]).valid, input:not([type]):focus.valid, input[type=text].valid, input[type=text]:focus.valid, input[type=password].valid, input[type=password]:focus.valid, input[type=email].valid, input[type=email]:focus.valid, input[type=url].valid, input[type=url]:focus.valid, input[type=time].valid, input[type=time]:focus.valid, input[type=date].valid, input[type=date]:focus.valid, input[type=datetime].valid, input[type=datetime]:focus.valid, input[type=datetime-local].valid, input[type=datetime-local]:focus.valid, input[type=tel].valid, input[type=tel]:focus.valid, input[type=number].valid, input[type=number]:focus.valid, input[type=search].valid, input[type=search]:focus.valid, textarea.materialize-textarea.valid, textarea.materialize-textarea:focus.valid {\n  border-bottom: 1px solid #4CAF50;\n  box-shadow: 0 1px 0 0 #4CAF50; }\ninput:not([type]).valid + label:after, input:not([type]):focus.valid + label:after, input[type=text].valid + label:after, input[type=text]:focus.valid + label:after, input[type=password].valid + label:after, input[type=password]:focus.valid + label:after, input[type=email].valid + label:after, input[type=email]:focus.valid + label:after, input[type=url].valid + label:after, input[type=url]:focus.valid + label:after, input[type=time].valid + label:after, input[type=time]:focus.valid + label:after, input[type=date].valid + label:after, input[type=date]:focus.valid + label:after, input[type=datetime].valid + label:after, input[type=datetime]:focus.valid + label:after, input[type=datetime-local].valid + label:after, input[type=datetime-local]:focus.valid + label:after, input[type=tel].valid + label:after, input[type=tel]:focus.valid + label:after, input[type=number].valid + label:after, input[type=number]:focus.valid + label:after, input[type=search].valid + label:after, input[type=search]:focus.valid + label:after, textarea.materialize-textarea.valid + label:after, textarea.materialize-textarea:focus.valid + label:after {\n  content: attr(data-success);\n  color: #4CAF50;\n  opacity: 1; }\ninput:not([type]).invalid, input:not([type]):focus.invalid, input[type=text].invalid, input[type=text]:focus.invalid, input[type=password].invalid, input[type=password]:focus.invalid, input[type=email].invalid, input[type=email]:focus.invalid, input[type=url].invalid, input[type=url]:focus.invalid, input[type=time].invalid, input[type=time]:focus.invalid, input[type=date].invalid, input[type=date]:focus.invalid, input[type=datetime].invalid, input[type=datetime]:focus.invalid, input[type=datetime-local].invalid, input[type=datetime-local]:focus.invalid, input[type=tel].invalid, input[type=tel]:focus.invalid, input[type=number].invalid, input[type=number]:focus.invalid, input[type=search].invalid, input[type=search]:focus.invalid, textarea.materialize-textarea.invalid, textarea.materialize-textarea:focus.invalid {\n  border-bottom: 1px solid #F44336;\n  box-shadow: 0 1px 0 0 #F44336; }\ninput:not([type]).invalid + label:after, input:not([type]):focus.invalid + label:after, input[type=text].invalid + label:after, input[type=text]:focus.invalid + label:after, input[type=password].invalid + label:after, input[type=password]:focus.invalid + label:after, input[type=email].invalid + label:after, input[type=email]:focus.invalid + label:after, input[type=url].invalid + label:after, input[type=url]:focus.invalid + label:after, input[type=time].invalid + label:after, input[type=time]:focus.invalid + label:after, input[type=date].invalid + label:after, input[type=date]:focus.invalid + label:after, input[type=datetime].invalid + label:after, input[type=datetime]:focus.invalid + label:after, input[type=datetime-local].invalid + label:after, input[type=datetime-local]:focus.invalid + label:after, input[type=tel].invalid + label:after, input[type=tel]:focus.invalid + label:after, input[type=number].invalid + label:after, input[type=number]:focus.invalid + label:after, input[type=search].invalid + label:after, input[type=search]:focus.invalid + label:after, textarea.materialize-textarea.invalid + label:after, textarea.materialize-textarea:focus.invalid + label:after {\n  content: attr(data-error);\n  color: #F44336;\n  opacity: 1; }\ninput:not([type]).validate + label, input[type=text].validate + label, input[type=password].validate + label, input[type=email].validate + label, input[type=url].validate + label, input[type=time].validate + label, input[type=date].validate + label, input[type=datetime].validate + label, input[type=datetime-local].validate + label, input[type=tel].validate + label, input[type=number].validate + label, input[type=search].validate + label, textarea.materialize-textarea.validate + label {\n  width: 100%;\n  pointer-events: none; }\ninput:not([type]) + label:after, input[type=text] + label:after, input[type=password] + label:after, input[type=email] + label:after, input[type=url] + label:after, input[type=time] + label:after, input[type=date] + label:after, input[type=datetime] + label:after, input[type=datetime-local] + label:after, input[type=tel] + label:after, input[type=number] + label:after, input[type=search] + label:after, textarea.materialize-textarea + label:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 60px;\n  opacity: 0;\n  -webkit-transition: .2s opacity ease-out, .2s color ease-out;\n  transition: .2s opacity ease-out, .2s color ease-out; }\n.input-field {\n  position: relative;\n  margin-top: 16px;\n  margin-top: 1rem; }\n.input-field.inline {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 5px; }\n.input-field.inline input, .input-field.inline .select-dropdown {\n  margin-bottom: 16px;\n  margin-bottom: 1rem; }\n.input-field.col label {\n  left: 12px;\n  left: .75rem; }\n.input-field.col .prefix ~ label, .input-field.col .prefix ~ .validate ~ label {\n  width: calc(100% - 3rem - 1.5rem); }\n.input-field label {\n  color: #9e9e9e;\n  position: absolute;\n  top: 12.8px;\n  top: 0.8rem;\n  left: 0;\n  font-size: 16px;\n  font-size: 1rem;\n  cursor: text;\n  -webkit-transition: .2s ease-out;\n  transition: .2s ease-out; }\n.input-field label:not(.label-icon).active {\n  font-size: 12.8px;\n  font-size: .8rem;\n  -webkit-transform: translateY(-140%);\n  transform: translateY(-140%); }\n.input-field .prefix {\n  position: absolute;\n  width: 48px;\n  width: 3rem;\n  font-size: 32px;\n  font-size: 2rem;\n  -webkit-transition: color .2s;\n  transition: color .2s; }\n.input-field .prefix.active {\n  color: #26a69a; }\n.input-field .prefix ~ input, .input-field .prefix ~ textarea, .input-field .prefix ~ label, .input-field .prefix ~ .validate ~ label, .input-field .prefix ~ .autocomplete-content {\n  margin-left: 48px;\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem); }\n.input-field .prefix ~ label {\n  margin-left: 48px;\n  margin-left: 3rem; }\n@media only screen and (max-width: 992px) {\n  .input-field .prefix ~ input {\n    width: 86%;\n    width: calc(100% - 3rem); } }\n@media only screen and (max-width: 600px) {\n  .input-field .prefix ~ input {\n    width: 80%;\n    width: calc(100% - 3rem); } }\n.input-field input[type=search] {\n  display: block;\n  line-height: inherit;\n  padding-left: 64px;\n  padding-left: 4rem;\n  width: calc(100% - 4rem); }\n.input-field input[type=search]:focus {\n  background-color: #fff;\n  border: 0;\n  box-shadow: none;\n  color: #444; }\n.input-field input[type=search]:focus + label i, .input-field input[type=search]:focus ~ .mdi-navigation-close, .input-field input[type=search]:focus ~ .material-icons {\n  color: #444; }\n.input-field input[type=search] + label {\n  left: 16px;\n  left: 1rem; }\n.input-field input[type=search] ~ .mdi-navigation-close, .input-field input[type=search] ~ .material-icons {\n  position: absolute;\n  top: 0;\n  right: 16px;\n  right: 1rem;\n  color: transparent;\n  cursor: pointer;\n  font-size: 32px;\n  font-size: 2rem;\n  -webkit-transition: .3s color;\n  transition: .3s color; }\ntextarea {\n  width: 100%;\n  height: 48px;\n  height: 3rem;\n  background-color: transparent; }\ntextarea.materialize-textarea {\n  overflow-y: hidden;\n  padding: 12.8px 0 25.6px 0;\n  padding: .8rem 0 1.6rem 0;\n  resize: none;\n  min-height: 48px;\n  min-height: 3rem; }\n.hiddendiv {\n  display: none;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  word-wrap: break-word;\n  padding-top: 19.2px;\n  padding-top: 1.2rem; }\n.autocomplete-content {\n  margin-top: -15px;\n  display: block;\n  opacity: 1;\n  position: static; }\n.autocomplete-content li .highlight {\n  color: #444; }\n.autocomplete-content li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px; }\n[type=\"radio\"]:not(:checked), [type=\"radio\"]:checked {\n  position: absolute;\n  left: -9999px;\n  opacity: 0; }\n[type=\"radio\"]:not(:checked) + label, [type=\"radio\"]:checked + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 16px;\n  font-size: 1rem;\n  -webkit-transition: .28s ease;\n  transition: .28s ease;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n[type=\"radio\"] + label:before, [type=\"radio\"] + label:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 4px;\n  width: 16px;\n  height: 16px;\n  z-index: 0;\n  -webkit-transition: .28s ease;\n  transition: .28s ease; }\n[type=\"radio\"]:not(:checked) + label:before, [type=\"radio\"]:not(:checked) + label:after, [type=\"radio\"]:checked + label:before, [type=\"radio\"]:checked + label:after, [type=\"radio\"].with-gap:checked + label:before, [type=\"radio\"].with-gap:checked + label:after {\n  border-radius: 50%; }\n[type=\"radio\"]:not(:checked) + label:before, [type=\"radio\"]:not(:checked) + label:after {\n  border: 2px solid #5a5a5a; }\n[type=\"radio\"]:not(:checked) + label:after {\n  -webkit-transform: scale(0);\n  transform: scale(0); }\n[type=\"radio\"]:checked + label:before {\n  border: 2px solid transparent; }\n[type=\"radio\"]:checked + label:after, [type=\"radio\"].with-gap:checked + label:before, [type=\"radio\"].with-gap:checked + label:after {\n  border: 2px solid #26a69a; }\n[type=\"radio\"]:checked + label:after, [type=\"radio\"].with-gap:checked + label:after {\n  background-color: #26a69a; }\n[type=\"radio\"]:checked + label:after {\n  -webkit-transform: scale(1.02);\n  transform: scale(1.02); }\n[type=\"radio\"].with-gap:checked + label:after {\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5); }\n[type=\"radio\"].tabbed:focus + label:before {\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, .1); }\n[type=\"radio\"].with-gap:disabled:checked + label:before {\n  border: 2px solid rgba(0, 0, 0, .26); }\n[type=\"radio\"].with-gap:disabled:checked + label:after {\n  border: none;\n  background-color: rgba(0, 0, 0, .26); }\n[type=\"radio\"]:disabled:not(:checked) + label:before, [type=\"radio\"]:disabled:checked + label:before {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, .26); }\n[type=\"radio\"]:disabled + label {\n  color: rgba(0, 0, 0, .26); }\n[type=\"radio\"]:disabled:not(:checked) + label:before {\n  border-color: rgba(0, 0, 0, .26); }\n[type=\"radio\"]:disabled:checked + label:after {\n  background-color: rgba(0, 0, 0, .26);\n  border-color: #BDBDBD; }\nform p {\n  margin-bottom: 10px;\n  text-align: left; }\nform p:last-child {\n  margin-bottom: 0; }\n[type=\"checkbox\"]:not(:checked), [type=\"checkbox\"]:checked {\n  position: absolute;\n  left: -9999px;\n  opacity: 0; }\n[type=\"checkbox\"] + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 16px;\n  font-size: 1rem;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none; }\n[type=\"checkbox\"] + label:before, [type=\"checkbox\"]:not(.filled-in) + label:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  z-index: 0;\n  border: 2px solid #5a5a5a;\n  border-radius: 1px;\n  margin-top: 2px;\n  -webkit-transition: .2s;\n  transition: .2s; }\n[type=\"checkbox\"]:not(.filled-in) + label:after {\n  border: 0;\n  -webkit-transform: scale(0);\n  transform: scale(0); }\n[type=\"checkbox\"]:not(:checked):disabled + label:before {\n  border: none;\n  background-color: rgba(0, 0, 0, .26); }\n[type=\"checkbox\"].tabbed:focus + label:after {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  border: 0;\n  border-radius: 50%;\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, .1);\n  background-color: rgba(0, 0, 0, .1); }\n[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -5px;\n  width: 12px;\n  height: 22px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #26a69a;\n  border-bottom: 2px solid #26a69a;\n  -webkit-transform: rotate(40deg);\n  transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%; }\n[type=\"checkbox\"]:checked:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, .26);\n  border-bottom: 2px solid rgba(0, 0, 0, .26); }\n[type=\"checkbox\"]:indeterminate + label:before {\n  top: -11px;\n  left: -12px;\n  width: 10px;\n  height: 22px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid #26a69a;\n  border-bottom: none;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%; }\n[type=\"checkbox\"]:indeterminate:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, .26);\n  background-color: transparent; }\n[type=\"checkbox\"].filled-in + label:after {\n  border-radius: 2px; }\n[type=\"checkbox\"].filled-in + label:before, [type=\"checkbox\"].filled-in + label:after {\n  content: '';\n  left: 0;\n  position: absolute;\n  -webkit-transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  z-index: 1; }\n[type=\"checkbox\"].filled-in:not(:checked) + label:before {\n  width: 0;\n  height: 0;\n  border: 3px solid transparent;\n  left: 6px;\n  top: 10px;\n  -webkit-transform: rotateZ(37deg);\n  transform: rotateZ(37deg);\n  -webkit-transform-origin: 20% 40%;\n  transform-origin: 100% 100%; }\n[type=\"checkbox\"].filled-in:not(:checked) + label:after {\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 2px solid #5a5a5a;\n  top: 0px;\n  z-index: 0; }\n[type=\"checkbox\"].filled-in:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 8px;\n  height: 13px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  -webkit-transform: rotateZ(37deg);\n  transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%; }\n[type=\"checkbox\"].filled-in:checked + label:after {\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0; }\n[type=\"checkbox\"].filled-in.tabbed:focus + label:after {\n  border-radius: 2px;\n  border-color: #5a5a5a;\n  background-color: rgba(0, 0, 0, .1); }\n[type=\"checkbox\"].filled-in.tabbed:checked:focus + label:after {\n  border-radius: 2px;\n  background-color: #26a69a;\n  border-color: #26a69a; }\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:before {\n  background-color: transparent;\n  border: 2px solid transparent; }\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:after {\n  border-color: transparent;\n  background-color: #BDBDBD; }\n[type=\"checkbox\"].filled-in:disabled:checked + label:before {\n  background-color: transparent; }\n[type=\"checkbox\"].filled-in:disabled:checked + label:after {\n  background-color: #BDBDBD;\n  border-color: #BDBDBD; }\n.switch, .switch * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none; }\n.switch label {\n  cursor: pointer; }\n.switch label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #84c7c1; }\n.switch label input[type=checkbox]:checked + .lever:after {\n  background-color: #26a69a;\n  left: 24px; }\n.switch label .lever {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 15px;\n  background-color: #818181;\n  border-radius: 15px;\n  margin-right: 10px;\n  -webkit-transition: background 0.3s ease;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n  margin: 0 16px; }\n.switch label .lever:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 21px;\n  height: 21px;\n  background-color: #F1F1F1;\n  border-radius: 21px;\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, .4);\n  left: -5px;\n  top: -3px;\n  -webkit-transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease;\n  transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease; }\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active::after, input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, .4), 0 0 0 15px rgba(38, 166, 154, .1); }\ninput[type=checkbox]:not(:disabled) ~ .lever:active:after, input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, .4), 0 0 0 15px rgba(0, 0, 0, .08); }\n.switch input[type=checkbox][disabled] + .lever {\n  cursor: default; }\n.switch label input[type=checkbox][disabled] + .lever:after, .switch label input[type=checkbox][disabled]:checked + .lever:after {\n  background-color: #BDBDBD; }\nselect {\n  display: none; }\nselect.browser-default {\n  display: block; }\nselect {\n  background-color: rgba(255, 255, 255, .9);\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #f2f2f2;\n  border-radius: 2px;\n  height: 48px;\n  height: 3rem; }\n.select-label {\n  position: absolute; }\n.select-wrapper {\n  position: relative; }\n.select-wrapper input.select-dropdown {\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  outline: none;\n  height: 48px;\n  height: 3rem;\n  line-height: 48px;\n  line-height: 3rem;\n  width: 100%;\n  font-size: 16px;\n  font-size: 1rem;\n  margin: 0 0 20px 0;\n  padding: 0;\n  display: block; }\n.select-wrapper span.caret {\n  color: #000;\n  color: initial;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  height: 10px;\n  margin: auto 0;\n  font-size: 10px;\n  line-height: 10px; }\n.select-wrapper span.caret.disabled {\n  color: rgba(0, 0, 0, .26); }\n.select-wrapper + label {\n  position: absolute;\n  top: -14px;\n  font-size: 12.8px;\n  font-size: .8rem; }\nselect:disabled {\n  color: rgba(0, 0, 0, .3); }\n.select-wrapper input.select-dropdown:disabled {\n  color: rgba(0, 0, 0, .3);\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  border-bottom: 1px solid rgba(0, 0, 0, .3); }\n.select-wrapper i {\n  color: rgba(0, 0, 0, .3); }\n.select-dropdown li.disabled, .select-dropdown li.disabled > span, .select-dropdown li.optgroup {\n  color: rgba(0, 0, 0, .3);\n  background-color: transparent; }\n.prefix ~ .select-wrapper {\n  margin-left: 48px;\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem); }\n.prefix ~ label {\n  margin-left: 48px;\n  margin-left: 3rem; }\n.select-dropdown li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n  float: right; }\n.select-dropdown li.optgroup {\n  border-top: 1px solid #eee; }\n.select-dropdown li.optgroup.selected > span {\n  color: rgba(0, 0, 0, .7); }\n.select-dropdown li.optgroup > span {\n  color: rgba(0, 0, 0, .4); }\n.select-dropdown li.optgroup ~ li.optgroup-option {\n  padding-left: 16px;\n  padding-left: 1rem; }\n.file-field {\n  position: relative; }\n.file-field .file-path-wrapper {\n  overflow: hidden;\n  padding-left: 10px; }\n.file-field input.file-path {\n  width: 100%; }\n.file-field .btn, .file-field .btn-large {\n  float: left;\n  height: 48px;\n  height: 3rem;\n  line-height: 48px;\n  line-height: 3rem; }\n.file-field span {\n  cursor: pointer; }\n.file-field input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n.range-field {\n  position: relative; }\ninput[type=range], input[type=range] + .thumb {\n  cursor: pointer; }\ninput[type=range] {\n  position: relative;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  margin: 15px 0;\n  padding: 0; }\ninput[type=range]:focus {\n  outline: none; }\ninput[type=range] + .thumb {\n  position: absolute;\n  border: none;\n  height: 0;\n  width: 0;\n  border-radius: 50%;\n  background-color: #26a69a;\n  top: 10px;\n  margin-left: -6px;\n  -webkit-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\ninput[type=range] + .thumb .value {\n  display: block;\n  width: 30px;\n  text-align: center;\n  color: #26a69a;\n  font-size: 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\ninput[type=range] + .thumb.active {\n  border-radius: 50% 50% 50% 0; }\ninput[type=range] + .thumb.active .value {\n  color: #fff;\n  margin-left: -1px;\n  margin-top: 8px;\n  font-size: 10px; }\ninput[type=range] {\n  -webkit-appearance: none; }\ninput[type=range]::-webkit-slider-runnable-track {\n  height: 3px;\n  background: #c2c0c2;\n  border: none; }\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background-color: #26a69a;\n  -webkit-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n  margin: -5px 0 0 0;\n  -webkit-transition: .3s;\n  transition: .3s; }\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #ccc; }\ninput[type=range] {\n  border: 1px solid white; }\ninput[type=range]::-moz-range-track {\n  height: 3px;\n  background: #ddd;\n  border: none; }\ninput[type=range]::-moz-range-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  margin-top: -5px; }\ninput[type=range]:-moz-focusring {\n  outline: 1px solid #fff;\n  outline-offset: -1px; }\ninput[type=range]:focus::-moz-range-track {\n  background: #ccc; }\ninput[type=range]::-ms-track {\n  height: 3px;\n  background: transparent;\n  border-color: transparent;\n  border-width: 6px 0;\n  color: transparent; }\ninput[type=range]::-ms-fill-lower {\n  background: #777; }\ninput[type=range]::-ms-fill-upper {\n  background: #ddd; }\ninput[type=range]::-ms-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a; }\ninput[type=range]:focus::-ms-fill-lower {\n  background: #888; }\ninput[type=range]:focus::-ms-fill-upper {\n  background: #ccc; }\n.table-of-contents.fixed {\n  position: fixed; }\n.table-of-contents li {\n  padding: 2px 0; }\n.table-of-contents a {\n  display: inline-block;\n  font-weight: 300;\n  color: #757575;\n  padding-left: 20px;\n  height: 24px;\n  height: 1.5rem;\n  line-height: 24px;\n  line-height: 1.5rem;\n  letter-spacing: .4;\n  display: inline-block; }\n.table-of-contents a:hover {\n  color: #a8a8a8;\n  padding-left: 19px;\n  border-left: 1px solid #ee6e73; }\n.table-of-contents a.active {\n  font-weight: 500;\n  padding-left: 18px;\n  border-left: 2px solid #ee6e73; }\n.side-nav {\n  position: fixed;\n  width: 300px;\n  left: 0;\n  top: 0;\n  margin: 0;\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n  height: 100%;\n  height: calc(100% + 60px);\n  height: 100%;\n  padding-bottom: 60px;\n  background-color: #fff;\n  z-index: 999;\n  overflow-y: auto;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translateX(-105%);\n  transform: translateX(-105%); }\n.side-nav.right-aligned {\n  right: 0;\n  -webkit-transform: translateX(105%);\n  transform: translateX(105%);\n  left: auto;\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%); }\n.side-nav .collapsible {\n  margin: 0; }\n.side-nav li {\n  float: none;\n  line-height: 48px; }\n.side-nav li.active {\n  background-color: rgba(0, 0, 0, .05); }\n.side-nav a {\n  color: rgba(0, 0, 0, .87);\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  height: 48px;\n  line-height: 48px;\n  padding: 0 32px; }\n.side-nav a:hover {\n  background-color: rgba(0, 0, 0, .05); }\n.side-nav a.btn, .side-nav a.btn-large, .side-nav a.btn-large, .side-nav a.btn-flat, .side-nav a.btn-floating {\n  margin: 10px 15px; }\n.side-nav a.btn, .side-nav a.btn-large, .side-nav a.btn-large, .side-nav a.btn-floating {\n  color: #fff; }\n.side-nav a.btn-flat {\n  color: #343434; }\n.side-nav a.btn:hover, .side-nav a.btn-large:hover, .side-nav a.btn-large:hover {\n  background-color: #2bbbad; }\n.side-nav a.btn-floating:hover {\n  background-color: #26a69a; }\n.side-nav li > a > i, .side-nav li > a > [class^=\"mdi-\"], .side-nav li > a > [class*=\"mdi-\"], .side-nav li > a > i.material-icons {\n  float: left;\n  height: 48px;\n  line-height: 48px;\n  margin: 0 32px 0 0;\n  width: 24px;\n  color: rgba(0, 0, 0, .54); }\n.side-nav .divider {\n  margin: 8px 0 0 0; }\n.side-nav .subheader {\n  cursor: auto;\n  cursor: initial;\n  pointer-events: none;\n  color: rgba(0, 0, 0, .54);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 48px; }\n.side-nav .subheader:hover {\n  background-color: transparent; }\n.side-nav .userView {\n  position: relative;\n  padding: 32px 32px 0;\n  margin-bottom: 8px; }\n.side-nav .userView > a {\n  height: auto;\n  padding: 0; }\n.side-nav .userView > a:hover {\n  background-color: transparent; }\n.side-nav .userView .background {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1; }\n.side-nav .userView .circle, .side-nav .userView .name, .side-nav .userView .email {\n  display: block; }\n.side-nav .userView .circle {\n  height: 64px;\n  width: 64px; }\n.side-nav .userView .name, .side-nav .userView .email {\n  font-size: 14px;\n  line-height: 24px; }\n.side-nav .userView .name {\n  margin-top: 16px;\n  font-weight: 500; }\n.side-nav .userView .email {\n  padding-bottom: 16px;\n  font-weight: 400; }\n.drag-target {\n  height: 100%;\n  width: 10px;\n  position: fixed;\n  top: 0;\n  z-index: 998; }\n.side-nav.fixed {\n  left: 0;\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  position: fixed; }\n.side-nav.fixed.right-aligned {\n  right: 0;\n  left: auto; }\n@media only screen and (max-width: 992px) {\n  .side-nav.fixed {\n    -webkit-transform: translateX(-105%);\n    transform: translateX(-105%); }\n  .side-nav.fixed.right-aligned {\n    -webkit-transform: translateX(105%);\n    transform: translateX(105%); }\n  .side-nav a {\n    padding: 0 16px; }\n  .side-nav .userView {\n    padding: 16px 16px 0; } }\n.side-nav .collapsible-body > ul:not(.collapsible) > li.active, .side-nav.fixed .collapsible-body > ul:not(.collapsible) > li.active {\n  background-color: #ee6e73; }\n.side-nav .collapsible-body > ul:not(.collapsible) > li.active a, .side-nav.fixed .collapsible-body > ul:not(.collapsible) > li.active a {\n  color: #fff; }\n#sidenav-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 120vh;\n  background-color: rgba(0, 0, 0, .5);\n  z-index: 997;\n  will-change: opacity; }\n.preloader-wrapper {\n  display: inline-block;\n  position: relative;\n  width: 48px;\n  height: 48px; }\n.preloader-wrapper.small {\n  width: 36px;\n  height: 36px; }\n.preloader-wrapper.big {\n  width: 64px;\n  height: 64px; }\n.preloader-wrapper.active {\n  -webkit-animation: container-rotate 1568ms linear infinite;\n  animation: container-rotate 1568ms linear infinite; }\n@-webkit-keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg); } }\n@keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n.spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-color: #26a69a; }\n.spinner-blue, .spinner-blue-only {\n  border-color: #4285f4; }\n.spinner-red, .spinner-red-only {\n  border-color: #db4437; }\n.spinner-yellow, .spinner-yellow-only {\n  border-color: #f4b400; }\n.spinner-green, .spinner-green-only {\n  border-color: #0f9d58; }\n.active .spinner-layer.spinner-blue {\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n.active .spinner-layer.spinner-red {\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n.active .spinner-layer.spinner-yellow {\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n.active .spinner-layer.spinner-green {\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n.active .spinner-layer, .active .spinner-layer.spinner-blue-only, .active .spinner-layer.spinner-red-only, .active .spinner-layer.spinner-yellow-only, .active .spinner-layer.spinner-green-only {\n  opacity: 1;\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n@-webkit-keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg); }\n  25% {\n    -webkit-transform: rotate(270deg); }\n  37.5% {\n    -webkit-transform: rotate(405deg); }\n  50% {\n    -webkit-transform: rotate(540deg); }\n  62.5% {\n    -webkit-transform: rotate(675deg); }\n  75% {\n    -webkit-transform: rotate(810deg); }\n  87.5% {\n    -webkit-transform: rotate(945deg); }\n  to {\n    -webkit-transform: rotate(1080deg); } }\n@keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg); }\n  25% {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg); }\n  37.5% {\n    -webkit-transform: rotate(405deg);\n    transform: rotate(405deg); }\n  50% {\n    -webkit-transform: rotate(540deg);\n    transform: rotate(540deg); }\n  62.5% {\n    -webkit-transform: rotate(675deg);\n    transform: rotate(675deg); }\n  75% {\n    -webkit-transform: rotate(810deg);\n    transform: rotate(810deg); }\n  87.5% {\n    -webkit-transform: rotate(945deg);\n    transform: rotate(945deg); }\n  to {\n    -webkit-transform: rotate(1080deg);\n    transform: rotate(1080deg); } }\n@-webkit-keyframes blue-fade-in-out {\n  from {\n    opacity: 1; }\n  25% {\n    opacity: 1; }\n  26% {\n    opacity: 0; }\n  89% {\n    opacity: 0; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n@keyframes blue-fade-in-out {\n  from {\n    opacity: 1; }\n  25% {\n    opacity: 1; }\n  26% {\n    opacity: 0; }\n  89% {\n    opacity: 0; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n@-webkit-keyframes red-fade-in-out {\n  from {\n    opacity: 0; }\n  15% {\n    opacity: 0; }\n  25% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  51% {\n    opacity: 0; } }\n@keyframes red-fade-in-out {\n  from {\n    opacity: 0; }\n  15% {\n    opacity: 0; }\n  25% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  51% {\n    opacity: 0; } }\n@-webkit-keyframes yellow-fade-in-out {\n  from {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  76% {\n    opacity: 0; } }\n@keyframes yellow-fade-in-out {\n  from {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  76% {\n    opacity: 0; } }\n@-webkit-keyframes green-fade-in-out {\n  from {\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  75% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes green-fade-in-out {\n  from {\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  75% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n.gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n.gap-patch .circle {\n  width: 1000%;\n  left: -450%; }\n.circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n.circle-clipper .circle {\n  width: 200%;\n  height: 100%;\n  border-width: 3px;\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent !important;\n  border-radius: 50%;\n  -webkit-animation: none;\n  animation: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n.circle-clipper.left .circle {\n  left: 0;\n  border-right-color: transparent !important;\n  -webkit-transform: rotate(129deg);\n  transform: rotate(129deg); }\n.circle-clipper.right .circle {\n  left: -100%;\n  border-left-color: transparent !important;\n  -webkit-transform: rotate(-129deg);\n  transform: rotate(-129deg); }\n.active .circle-clipper.left .circle {\n  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n.active .circle-clipper.right .circle {\n  -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n@-webkit-keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg); }\n  50% {\n    -webkit-transform: rotate(-5deg); }\n  to {\n    -webkit-transform: rotate(130deg); } }\n@keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n    transform: rotate(130deg); }\n  50% {\n    -webkit-transform: rotate(-5deg);\n    transform: rotate(-5deg); }\n  to {\n    -webkit-transform: rotate(130deg);\n    transform: rotate(130deg); } }\n@-webkit-keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg); }\n  50% {\n    -webkit-transform: rotate(5deg); }\n  to {\n    -webkit-transform: rotate(-130deg); } }\n@keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n    transform: rotate(-130deg); }\n  50% {\n    -webkit-transform: rotate(5deg);\n    transform: rotate(5deg); }\n  to {\n    -webkit-transform: rotate(-130deg);\n    transform: rotate(-130deg); } }\n#spinnerContainer.cooldown {\n  -webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n  animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1); }\n@-webkit-keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n@keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n.slider {\n  position: relative;\n  height: 400px;\n  width: 100%; }\n.slider.fullscreen {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n.slider.fullscreen ul.slides {\n  height: 100%; }\n.slider.fullscreen ul.indicators {\n  z-index: 2;\n  bottom: 30px; }\n.slider .slides {\n  background-color: #9e9e9e;\n  margin: 0;\n  height: 400px; }\n.slider .slides li {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: inherit;\n  overflow: hidden; }\n.slider .slides li img {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center; }\n.slider .slides li .caption {\n  color: #fff;\n  position: absolute;\n  top: 15%;\n  left: 15%;\n  width: 70%;\n  opacity: 0; }\n.slider .slides li .caption p {\n  color: #e0e0e0; }\n.slider .slides li.active {\n  z-index: 2; }\n.slider .indicators {\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0; }\n.slider .indicators .indicator-item {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  margin: 0 12px;\n  background-color: #e0e0e0;\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  border-radius: 50%; }\n.slider .indicators .indicator-item.active {\n  background-color: #4CAF50; }\n.carousel {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 400px;\n  -webkit-perspective: 500px;\n  perspective: 500px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  transform-origin: 0% 50%; }\n.carousel.carousel-slider {\n  top: 0;\n  left: 0;\n  height: 0; }\n.carousel.carousel-slider .carousel-fixed-item {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 20px;\n  z-index: 1; }\n.carousel.carousel-slider .carousel-fixed-item.with-indicators {\n  bottom: 68px; }\n.carousel.carousel-slider .carousel-item {\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  position: absolute;\n  top: 0;\n  left: 0; }\n.carousel.carousel-slider .carousel-item h2 {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 32px; }\n.carousel.carousel-slider .carousel-item p {\n  font-size: 15px; }\n.carousel .carousel-item {\n  display: none;\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 0;\n  left: 0; }\n.carousel .carousel-item img {\n  width: 100%; }\n.carousel .indicators {\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0; }\n.carousel .indicators .indicator-item {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 8px;\n  width: 8px;\n  margin: 24px 4px;\n  background-color: rgba(255, 255, 255, .5);\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  border-radius: 50%; }\n.carousel .indicators .indicator-item.active {\n  background-color: #fff; }\n.picker {\n  font-size: 16px;\n  text-align: left;\n  line-height: 1.2;\n  color: #000000;\n  position: absolute;\n  z-index: 10000;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n.picker__input {\n  cursor: default; }\n.picker__input.picker__input--active {\n  border-color: #0089ec; }\n.picker__holder {\n  width: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n/*!\n * Default mobile-first, responsive styling for pickadate.js\n * Demo: http://amsul.github.io/pickadate.js\n */\n.picker__holder, .picker__frame {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 100%; }\n.picker__holder {\n  position: fixed;\n  -webkit-transition: background 0.15s ease-out, top 0s 0.15s;\n  transition: background 0.15s ease-out, top 0s 0.15s;\n  -webkit-backface-visibility: hidden; }\n.picker__frame {\n  position: absolute;\n  margin: 0 auto;\n  min-width: 256px;\n  width: 300px;\n  max-height: 350px;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  -moz-opacity: 0;\n  opacity: 0;\n  -webkit-transition: all 0.15s ease-out;\n  transition: all 0.15s ease-out; }\n@media (min-height: 28.875em) {\n  .picker__frame {\n    overflow: visible;\n    top: auto;\n    bottom: -100%;\n    max-height: 80%; } }\n@media (min-height: 40.125em) {\n  .picker__frame {\n    margin-bottom: 7.5%; } }\n.picker__wrap {\n  display: table;\n  width: 100%;\n  height: 100%; }\n@media (min-height: 28.875em) {\n  .picker__wrap {\n    display: block; } }\n.picker__box {\n  background: #ffffff;\n  display: table-cell;\n  vertical-align: middle; }\n@media (min-height: 28.875em) {\n  .picker__box {\n    display: block;\n    border: 1px solid #777777;\n    border-top-color: #898989;\n    border-bottom-width: 0;\n    border-radius: 5px 5px 0 0;\n    box-shadow: 0 12px 36px 16px rgba(0, 0, 0, .24); } }\n.picker--opened .picker__holder {\n  top: 0;\n  background: transparent;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(30, 0, 0, 0),endColorstr=rgba(30, 0, 0, 0))\";\n  zoom: 1;\n  background: rgba(0, 0, 0, .32);\n  -webkit-transition: background 0.15s ease-out;\n  transition: background 0.15s ease-out; }\n.picker--opened .picker__frame {\n  top: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n  -moz-opacity: 1;\n  opacity: 1; }\n@media (min-height: 35.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto; } }\n.picker__input.picker__input--active {\n  border-color: #E3F2FD; }\n.picker__frame {\n  margin: 0 auto;\n  max-width: 325px; }\n@media (min-height: 38.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto; } }\n.picker__box {\n  padding: 0 1em; }\n.picker__header {\n  text-align: center;\n  position: relative;\n  margin-top: .75em; }\n.picker__month, .picker__year {\n  display: inline-block;\n  margin-left: .25em;\n  margin-right: .25em; }\n.picker__select--month, .picker__select--year {\n  height: 2em;\n  padding: 0;\n  margin-left: .25em;\n  margin-right: .25em; }\n.picker__select--month.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 40%; }\n.picker__select--year.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 26%; }\n.picker__select--month:focus, .picker__select--year:focus {\n  border-color: rgba(0, 0, 0, .05); }\n.picker__nav--prev, .picker__nav--next {\n  position: absolute;\n  padding: .5em 1.25em;\n  width: 1em;\n  height: 1em;\n  box-sizing: content-box;\n  top: -0.25em; }\n.picker__nav--prev {\n  left: -1em;\n  padding-right: 1.25em; }\n.picker__nav--next {\n  right: -1em;\n  padding-left: 1.25em; }\n.picker__nav--disabled, .picker__nav--disabled:hover, .picker__nav--disabled:before, .picker__nav--disabled:before:hover {\n  cursor: default;\n  background: none;\n  border-right-color: #f5f5f5;\n  border-left-color: #f5f5f5; }\n.picker__table {\n  text-align: center;\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  font-size: 16px;\n  font-size: 1rem;\n  width: 100%;\n  margin-top: .75em;\n  margin-bottom: .5em; }\n.picker__table th, .picker__table td {\n  text-align: center; }\n.picker__table td {\n  margin: 0;\n  padding: 0; }\n.picker__weekday {\n  width: 14.285714286%;\n  font-size: .75em;\n  padding-bottom: .25em;\n  color: #999999;\n  font-weight: 500; }\n@media (min-height: 33.875em) {\n  .picker__weekday {\n    padding-bottom: .5em; } }\n.picker__day--today {\n  position: relative;\n  color: #595959;\n  letter-spacing: -.3;\n  padding: 12px 0;\n  padding: .75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent; }\n.picker__day--disabled:before {\n  border-top-color: #aaaaaa; }\n.picker__day--infocus:hover {\n  cursor: pointer;\n  color: #000;\n  font-weight: 500; }\n.picker__day--outfocus {\n  display: none;\n  padding: 12px 0;\n  padding: .75rem 0;\n  color: #fff; }\n.picker__day--outfocus:hover {\n  cursor: pointer;\n  color: #dddddd;\n  font-weight: 500; }\n.picker__day--highlighted:hover, .picker--focused .picker__day--highlighted {\n  cursor: pointer; }\n.picker__day--selected, .picker__day--selected:hover, .picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.75);\n  transform: scale(0.75);\n  background: #0089ec;\n  color: #ffffff; }\n.picker__day--disabled, .picker__day--disabled:hover, .picker--focused .picker__day--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default; }\n.picker__day--highlighted.picker__day--disabled, .picker__day--highlighted.picker__day--disabled:hover {\n  background: #bbbbbb; }\n.picker__footer {\n  text-align: center;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -ms-flex-pack: justify;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n.picker__button--today, .picker__button--clear, .picker__button--close {\n  border: 1px solid #ffffff;\n  background: #ffffff;\n  font-size: .8em;\n  padding: .66em 0;\n  font-weight: bold;\n  width: 33%;\n  display: inline-block;\n  vertical-align: bottom; }\n.picker__button--today:hover, .picker__button--clear:hover, .picker__button--close:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n  border-bottom-color: #b1dcfb; }\n.picker__button--today:focus, .picker__button--clear:focus, .picker__button--close:focus {\n  background: #b1dcfb;\n  border-color: rgba(0, 0, 0, .05);\n  outline: none; }\n.picker__button--today:before, .picker__button--clear:before, .picker__button--close:before {\n  position: relative;\n  display: inline-block;\n  height: 0; }\n.picker__button--today:before, .picker__button--clear:before {\n  content: \" \";\n  margin-right: .45em; }\n.picker__button--today:before {\n  top: -0.05em;\n  width: 0;\n  border-top: 0.66em solid #0059bc;\n  border-left: .66em solid transparent; }\n.picker__button--clear:before {\n  top: -0.25em;\n  width: .66em;\n  border-top: 3px solid #ee2200; }\n.picker__button--close:before {\n  content: \"\\D7\";\n  top: -0.1em;\n  vertical-align: top;\n  font-size: 1.1em;\n  margin-right: .35em;\n  color: #777777; }\n.picker__button--today[disabled], .picker__button--today[disabled]:hover {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default; }\n.picker__button--today[disabled]:before {\n  border-top-color: #aaaaaa; }\n.picker__box {\n  border-radius: 2px;\n  overflow: hidden; }\n.picker__date-display {\n  text-align: center;\n  background-color: #26a69a;\n  color: #fff;\n  padding-bottom: 15px;\n  font-weight: 300; }\n.picker__nav--prev:hover, .picker__nav--next:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #a1ded8; }\n.picker__weekday-display {\n  background-color: #1f897f;\n  padding: 10px;\n  font-weight: 200;\n  letter-spacing: .5;\n  font-size: 16px;\n  font-size: 1rem;\n  margin-bottom: 15px; }\n.picker__month-display {\n  text-transform: uppercase;\n  font-size: 32px;\n  font-size: 2rem; }\n.picker__day-display {\n  font-size: 72px;\n  font-size: 4.5rem;\n  font-weight: 400; }\n.picker__year-display {\n  font-size: 28.8px;\n  font-size: 1.8rem;\n  color: rgba(255, 255, 255, .4); }\n.picker__box {\n  padding: 0; }\n.picker__calendar-container {\n  padding: 0 16px;\n  padding: 0 1rem; }\n.picker__calendar-container thead {\n  border: none; }\n.picker__table {\n  margin-top: 0;\n  margin-bottom: .5em; }\n.picker__day--infocus {\n  color: #595959;\n  letter-spacing: -.3;\n  padding: 12px 0;\n  padding: .75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent; }\n.picker__day.picker__day--today {\n  color: #26a69a; }\n.picker__day.picker__day--today.picker__day--selected {\n  color: #fff; }\n.picker__weekday {\n  font-size: 14.4px;\n  font-size: .9rem; }\n.picker__day--selected, .picker__day--selected:hover, .picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.9);\n  transform: scale(0.9);\n  background-color: #26a69a;\n  color: #ffffff; }\n.picker__day--selected.picker__day--outfocus, .picker__day--selected:hover.picker__day--outfocus, .picker--focused .picker__day--selected.picker__day--outfocus {\n  background-color: #a1ded8; }\n.picker__footer {\n  text-align: right;\n  padding: 5px 10px; }\n.picker__close, .picker__today {\n  font-size: 17.6px;\n  font-size: 1.1rem;\n  padding: 0 16px;\n  padding: 0 1rem;\n  color: #26a69a; }\n.picker__nav--prev:before, .picker__nav--next:before {\n  content: \" \";\n  border-top: .5em solid transparent;\n  border-bottom: .5em solid transparent;\n  border-right: 0.75em solid #676767;\n  width: 0;\n  height: 0;\n  display: block;\n  margin: 0 auto; }\n.picker__nav--next:before {\n  border-right: 0;\n  border-left: 0.75em solid #676767; }\nbutton.picker__today:focus, button.picker__clear:focus, button.picker__close:focus {\n  background-color: #a1ded8; }\n.picker__list {\n  list-style: none;\n  padding: 0.75em 0 4.2em;\n  margin: 0; }\n.picker__list-item {\n  border-bottom: 1px solid #dddddd;\n  border-top: 1px solid #dddddd;\n  margin-bottom: -1px;\n  position: relative;\n  background: #ffffff;\n  padding: .75em 1.25em; }\n@media (min-height: 46.75em) {\n  .picker__list-item {\n    padding: .5em 1em; } }\n.picker__list-item:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n  border-color: #0089ec;\n  z-index: 10; }\n.picker__list-item--highlighted {\n  border-color: #0089ec;\n  z-index: 10; }\n.picker__list-item--highlighted:hover, .picker--focused .picker__list-item--highlighted {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb; }\n.picker__list-item--selected, .picker__list-item--selected:hover, .picker--focused .picker__list-item--selected {\n  background: #0089ec;\n  color: #ffffff;\n  z-index: 10; }\n.picker__list-item--disabled, .picker__list-item--disabled:hover, .picker--focused .picker__list-item--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default;\n  border-color: #dddddd;\n  z-index: auto; }\n.picker--time .picker__button--clear {\n  display: block;\n  width: 80%;\n  margin: 1em auto 0;\n  padding: 1em 1.25em;\n  background: none;\n  border: 0;\n  font-weight: 500;\n  font-size: .67em;\n  text-align: center;\n  text-transform: uppercase;\n  color: #666; }\n.picker--time .picker__button--clear:hover, .picker--time .picker__button--clear:focus {\n  color: #000000;\n  background: #b1dcfb;\n  background: #ee2200;\n  border-color: #ee2200;\n  cursor: pointer;\n  color: #ffffff;\n  outline: none; }\n.picker--time .picker__button--clear:before {\n  top: -0.25em;\n  color: #666;\n  font-size: 1.25em;\n  font-weight: bold; }\n.picker--time .picker__button--clear:hover:before, .picker--time .picker__button--clear:focus:before {\n  color: #ffffff; }\n.picker--time .picker__frame {\n  min-width: 256px;\n  max-width: 320px; }\n.picker--time .picker__box {\n  font-size: 1em;\n  background: #f2f2f2;\n  padding: 0; }\n@media (min-height: 40.125em) {\n  .picker--time .picker__box {\n    margin-bottom: 5em; } }\n", "", {"version":3,"sources":["/Users/nagib/Documents/StaticWeb/2017/HST-Materialize-Hugo/node_modules/materialize-css/dist/css/materialize.min.css","/Users/nagib/Documents/StaticWeb/2017/HST-Materialize-Hugo/node_modules/materialize-css/dist/css/materialize.min.css"],"names":[],"mappings":"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","file":"materialize.min.css","sourcesContent":["/*!\n * Materialize v0.98.0 (http://materializecss.com)\n * Copyright 2014-2015 Materialize\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\n */\n.materialize-red{background-color:#e51c23 !important}.materialize-red-text{color:#e51c23 !important}.materialize-red.lighten-5{background-color:#fdeaeb !important}.materialize-red-text.text-lighten-5{color:#fdeaeb !important}.materialize-red.lighten-4{background-color:#f8c1c3 !important}.materialize-red-text.text-lighten-4{color:#f8c1c3 !important}.materialize-red.lighten-3{background-color:#f3989b !important}.materialize-red-text.text-lighten-3{color:#f3989b !important}.materialize-red.lighten-2{background-color:#ee6e73 !important}.materialize-red-text.text-lighten-2{color:#ee6e73 !important}.materialize-red.lighten-1{background-color:#ea454b !important}.materialize-red-text.text-lighten-1{color:#ea454b !important}.materialize-red.darken-1{background-color:#d0181e !important}.materialize-red-text.text-darken-1{color:#d0181e !important}.materialize-red.darken-2{background-color:#b9151b !important}.materialize-red-text.text-darken-2{color:#b9151b !important}.materialize-red.darken-3{background-color:#a21318 !important}.materialize-red-text.text-darken-3{color:#a21318 !important}.materialize-red.darken-4{background-color:#8b1014 !important}.materialize-red-text.text-darken-4{color:#8b1014 !important}.red{background-color:#F44336 !important}.red-text{color:#F44336 !important}.red.lighten-5{background-color:#FFEBEE !important}.red-text.text-lighten-5{color:#FFEBEE !important}.red.lighten-4{background-color:#FFCDD2 !important}.red-text.text-lighten-4{color:#FFCDD2 !important}.red.lighten-3{background-color:#EF9A9A !important}.red-text.text-lighten-3{color:#EF9A9A !important}.red.lighten-2{background-color:#E57373 !important}.red-text.text-lighten-2{color:#E57373 !important}.red.lighten-1{background-color:#EF5350 !important}.red-text.text-lighten-1{color:#EF5350 !important}.red.darken-1{background-color:#E53935 !important}.red-text.text-darken-1{color:#E53935 !important}.red.darken-2{background-color:#D32F2F !important}.red-text.text-darken-2{color:#D32F2F !important}.red.darken-3{background-color:#C62828 !important}.red-text.text-darken-3{color:#C62828 !important}.red.darken-4{background-color:#B71C1C !important}.red-text.text-darken-4{color:#B71C1C !important}.red.accent-1{background-color:#FF8A80 !important}.red-text.text-accent-1{color:#FF8A80 !important}.red.accent-2{background-color:#FF5252 !important}.red-text.text-accent-2{color:#FF5252 !important}.red.accent-3{background-color:#FF1744 !important}.red-text.text-accent-3{color:#FF1744 !important}.red.accent-4{background-color:#D50000 !important}.red-text.text-accent-4{color:#D50000 !important}.pink{background-color:#e91e63 !important}.pink-text{color:#e91e63 !important}.pink.lighten-5{background-color:#fce4ec !important}.pink-text.text-lighten-5{color:#fce4ec !important}.pink.lighten-4{background-color:#f8bbd0 !important}.pink-text.text-lighten-4{color:#f8bbd0 !important}.pink.lighten-3{background-color:#f48fb1 !important}.pink-text.text-lighten-3{color:#f48fb1 !important}.pink.lighten-2{background-color:#f06292 !important}.pink-text.text-lighten-2{color:#f06292 !important}.pink.lighten-1{background-color:#ec407a !important}.pink-text.text-lighten-1{color:#ec407a !important}.pink.darken-1{background-color:#d81b60 !important}.pink-text.text-darken-1{color:#d81b60 !important}.pink.darken-2{background-color:#c2185b !important}.pink-text.text-darken-2{color:#c2185b !important}.pink.darken-3{background-color:#ad1457 !important}.pink-text.text-darken-3{color:#ad1457 !important}.pink.darken-4{background-color:#880e4f !important}.pink-text.text-darken-4{color:#880e4f !important}.pink.accent-1{background-color:#ff80ab !important}.pink-text.text-accent-1{color:#ff80ab !important}.pink.accent-2{background-color:#ff4081 !important}.pink-text.text-accent-2{color:#ff4081 !important}.pink.accent-3{background-color:#f50057 !important}.pink-text.text-accent-3{color:#f50057 !important}.pink.accent-4{background-color:#c51162 !important}.pink-text.text-accent-4{color:#c51162 !important}.purple{background-color:#9c27b0 !important}.purple-text{color:#9c27b0 !important}.purple.lighten-5{background-color:#f3e5f5 !important}.purple-text.text-lighten-5{color:#f3e5f5 !important}.purple.lighten-4{background-color:#e1bee7 !important}.purple-text.text-lighten-4{color:#e1bee7 !important}.purple.lighten-3{background-color:#ce93d8 !important}.purple-text.text-lighten-3{color:#ce93d8 !important}.purple.lighten-2{background-color:#ba68c8 !important}.purple-text.text-lighten-2{color:#ba68c8 !important}.purple.lighten-1{background-color:#ab47bc !important}.purple-text.text-lighten-1{color:#ab47bc !important}.purple.darken-1{background-color:#8e24aa !important}.purple-text.text-darken-1{color:#8e24aa !important}.purple.darken-2{background-color:#7b1fa2 !important}.purple-text.text-darken-2{color:#7b1fa2 !important}.purple.darken-3{background-color:#6a1b9a !important}.purple-text.text-darken-3{color:#6a1b9a !important}.purple.darken-4{background-color:#4a148c !important}.purple-text.text-darken-4{color:#4a148c !important}.purple.accent-1{background-color:#ea80fc !important}.purple-text.text-accent-1{color:#ea80fc !important}.purple.accent-2{background-color:#e040fb !important}.purple-text.text-accent-2{color:#e040fb !important}.purple.accent-3{background-color:#d500f9 !important}.purple-text.text-accent-3{color:#d500f9 !important}.purple.accent-4{background-color:#a0f !important}.purple-text.text-accent-4{color:#a0f !important}.deep-purple{background-color:#673ab7 !important}.deep-purple-text{color:#673ab7 !important}.deep-purple.lighten-5{background-color:#ede7f6 !important}.deep-purple-text.text-lighten-5{color:#ede7f6 !important}.deep-purple.lighten-4{background-color:#d1c4e9 !important}.deep-purple-text.text-lighten-4{color:#d1c4e9 !important}.deep-purple.lighten-3{background-color:#b39ddb !important}.deep-purple-text.text-lighten-3{color:#b39ddb !important}.deep-purple.lighten-2{background-color:#9575cd !important}.deep-purple-text.text-lighten-2{color:#9575cd !important}.deep-purple.lighten-1{background-color:#7e57c2 !important}.deep-purple-text.text-lighten-1{color:#7e57c2 !important}.deep-purple.darken-1{background-color:#5e35b1 !important}.deep-purple-text.text-darken-1{color:#5e35b1 !important}.deep-purple.darken-2{background-color:#512da8 !important}.deep-purple-text.text-darken-2{color:#512da8 !important}.deep-purple.darken-3{background-color:#4527a0 !important}.deep-purple-text.text-darken-3{color:#4527a0 !important}.deep-purple.darken-4{background-color:#311b92 !important}.deep-purple-text.text-darken-4{color:#311b92 !important}.deep-purple.accent-1{background-color:#b388ff !important}.deep-purple-text.text-accent-1{color:#b388ff !important}.deep-purple.accent-2{background-color:#7c4dff !important}.deep-purple-text.text-accent-2{color:#7c4dff !important}.deep-purple.accent-3{background-color:#651fff !important}.deep-purple-text.text-accent-3{color:#651fff !important}.deep-purple.accent-4{background-color:#6200ea !important}.deep-purple-text.text-accent-4{color:#6200ea !important}.indigo{background-color:#3f51b5 !important}.indigo-text{color:#3f51b5 !important}.indigo.lighten-5{background-color:#e8eaf6 !important}.indigo-text.text-lighten-5{color:#e8eaf6 !important}.indigo.lighten-4{background-color:#c5cae9 !important}.indigo-text.text-lighten-4{color:#c5cae9 !important}.indigo.lighten-3{background-color:#9fa8da !important}.indigo-text.text-lighten-3{color:#9fa8da !important}.indigo.lighten-2{background-color:#7986cb !important}.indigo-text.text-lighten-2{color:#7986cb !important}.indigo.lighten-1{background-color:#5c6bc0 !important}.indigo-text.text-lighten-1{color:#5c6bc0 !important}.indigo.darken-1{background-color:#3949ab !important}.indigo-text.text-darken-1{color:#3949ab !important}.indigo.darken-2{background-color:#303f9f !important}.indigo-text.text-darken-2{color:#303f9f !important}.indigo.darken-3{background-color:#283593 !important}.indigo-text.text-darken-3{color:#283593 !important}.indigo.darken-4{background-color:#1a237e !important}.indigo-text.text-darken-4{color:#1a237e !important}.indigo.accent-1{background-color:#8c9eff !important}.indigo-text.text-accent-1{color:#8c9eff !important}.indigo.accent-2{background-color:#536dfe !important}.indigo-text.text-accent-2{color:#536dfe !important}.indigo.accent-3{background-color:#3d5afe !important}.indigo-text.text-accent-3{color:#3d5afe !important}.indigo.accent-4{background-color:#304ffe !important}.indigo-text.text-accent-4{color:#304ffe !important}.blue{background-color:#2196F3 !important}.blue-text{color:#2196F3 !important}.blue.lighten-5{background-color:#E3F2FD !important}.blue-text.text-lighten-5{color:#E3F2FD !important}.blue.lighten-4{background-color:#BBDEFB !important}.blue-text.text-lighten-4{color:#BBDEFB !important}.blue.lighten-3{background-color:#90CAF9 !important}.blue-text.text-lighten-3{color:#90CAF9 !important}.blue.lighten-2{background-color:#64B5F6 !important}.blue-text.text-lighten-2{color:#64B5F6 !important}.blue.lighten-1{background-color:#42A5F5 !important}.blue-text.text-lighten-1{color:#42A5F5 !important}.blue.darken-1{background-color:#1E88E5 !important}.blue-text.text-darken-1{color:#1E88E5 !important}.blue.darken-2{background-color:#1976D2 !important}.blue-text.text-darken-2{color:#1976D2 !important}.blue.darken-3{background-color:#1565C0 !important}.blue-text.text-darken-3{color:#1565C0 !important}.blue.darken-4{background-color:#0D47A1 !important}.blue-text.text-darken-4{color:#0D47A1 !important}.blue.accent-1{background-color:#82B1FF !important}.blue-text.text-accent-1{color:#82B1FF !important}.blue.accent-2{background-color:#448AFF !important}.blue-text.text-accent-2{color:#448AFF !important}.blue.accent-3{background-color:#2979FF !important}.blue-text.text-accent-3{color:#2979FF !important}.blue.accent-4{background-color:#2962FF !important}.blue-text.text-accent-4{color:#2962FF !important}.light-blue{background-color:#03a9f4 !important}.light-blue-text{color:#03a9f4 !important}.light-blue.lighten-5{background-color:#e1f5fe !important}.light-blue-text.text-lighten-5{color:#e1f5fe !important}.light-blue.lighten-4{background-color:#b3e5fc !important}.light-blue-text.text-lighten-4{color:#b3e5fc !important}.light-blue.lighten-3{background-color:#81d4fa !important}.light-blue-text.text-lighten-3{color:#81d4fa !important}.light-blue.lighten-2{background-color:#4fc3f7 !important}.light-blue-text.text-lighten-2{color:#4fc3f7 !important}.light-blue.lighten-1{background-color:#29b6f6 !important}.light-blue-text.text-lighten-1{color:#29b6f6 !important}.light-blue.darken-1{background-color:#039be5 !important}.light-blue-text.text-darken-1{color:#039be5 !important}.light-blue.darken-2{background-color:#0288d1 !important}.light-blue-text.text-darken-2{color:#0288d1 !important}.light-blue.darken-3{background-color:#0277bd !important}.light-blue-text.text-darken-3{color:#0277bd !important}.light-blue.darken-4{background-color:#01579b !important}.light-blue-text.text-darken-4{color:#01579b !important}.light-blue.accent-1{background-color:#80d8ff !important}.light-blue-text.text-accent-1{color:#80d8ff !important}.light-blue.accent-2{background-color:#40c4ff !important}.light-blue-text.text-accent-2{color:#40c4ff !important}.light-blue.accent-3{background-color:#00b0ff !important}.light-blue-text.text-accent-3{color:#00b0ff !important}.light-blue.accent-4{background-color:#0091ea !important}.light-blue-text.text-accent-4{color:#0091ea !important}.cyan{background-color:#00bcd4 !important}.cyan-text{color:#00bcd4 !important}.cyan.lighten-5{background-color:#e0f7fa !important}.cyan-text.text-lighten-5{color:#e0f7fa !important}.cyan.lighten-4{background-color:#b2ebf2 !important}.cyan-text.text-lighten-4{color:#b2ebf2 !important}.cyan.lighten-3{background-color:#80deea !important}.cyan-text.text-lighten-3{color:#80deea !important}.cyan.lighten-2{background-color:#4dd0e1 !important}.cyan-text.text-lighten-2{color:#4dd0e1 !important}.cyan.lighten-1{background-color:#26c6da !important}.cyan-text.text-lighten-1{color:#26c6da !important}.cyan.darken-1{background-color:#00acc1 !important}.cyan-text.text-darken-1{color:#00acc1 !important}.cyan.darken-2{background-color:#0097a7 !important}.cyan-text.text-darken-2{color:#0097a7 !important}.cyan.darken-3{background-color:#00838f !important}.cyan-text.text-darken-3{color:#00838f !important}.cyan.darken-4{background-color:#006064 !important}.cyan-text.text-darken-4{color:#006064 !important}.cyan.accent-1{background-color:#84ffff !important}.cyan-text.text-accent-1{color:#84ffff !important}.cyan.accent-2{background-color:#18ffff !important}.cyan-text.text-accent-2{color:#18ffff !important}.cyan.accent-3{background-color:#00e5ff !important}.cyan-text.text-accent-3{color:#00e5ff !important}.cyan.accent-4{background-color:#00b8d4 !important}.cyan-text.text-accent-4{color:#00b8d4 !important}.teal{background-color:#009688 !important}.teal-text{color:#009688 !important}.teal.lighten-5{background-color:#e0f2f1 !important}.teal-text.text-lighten-5{color:#e0f2f1 !important}.teal.lighten-4{background-color:#b2dfdb !important}.teal-text.text-lighten-4{color:#b2dfdb !important}.teal.lighten-3{background-color:#80cbc4 !important}.teal-text.text-lighten-3{color:#80cbc4 !important}.teal.lighten-2{background-color:#4db6ac !important}.teal-text.text-lighten-2{color:#4db6ac !important}.teal.lighten-1{background-color:#26a69a !important}.teal-text.text-lighten-1{color:#26a69a !important}.teal.darken-1{background-color:#00897b !important}.teal-text.text-darken-1{color:#00897b !important}.teal.darken-2{background-color:#00796b !important}.teal-text.text-darken-2{color:#00796b !important}.teal.darken-3{background-color:#00695c !important}.teal-text.text-darken-3{color:#00695c !important}.teal.darken-4{background-color:#004d40 !important}.teal-text.text-darken-4{color:#004d40 !important}.teal.accent-1{background-color:#a7ffeb !important}.teal-text.text-accent-1{color:#a7ffeb !important}.teal.accent-2{background-color:#64ffda !important}.teal-text.text-accent-2{color:#64ffda !important}.teal.accent-3{background-color:#1de9b6 !important}.teal-text.text-accent-3{color:#1de9b6 !important}.teal.accent-4{background-color:#00bfa5 !important}.teal-text.text-accent-4{color:#00bfa5 !important}.green{background-color:#4CAF50 !important}.green-text{color:#4CAF50 !important}.green.lighten-5{background-color:#E8F5E9 !important}.green-text.text-lighten-5{color:#E8F5E9 !important}.green.lighten-4{background-color:#C8E6C9 !important}.green-text.text-lighten-4{color:#C8E6C9 !important}.green.lighten-3{background-color:#A5D6A7 !important}.green-text.text-lighten-3{color:#A5D6A7 !important}.green.lighten-2{background-color:#81C784 !important}.green-text.text-lighten-2{color:#81C784 !important}.green.lighten-1{background-color:#66BB6A !important}.green-text.text-lighten-1{color:#66BB6A !important}.green.darken-1{background-color:#43A047 !important}.green-text.text-darken-1{color:#43A047 !important}.green.darken-2{background-color:#388E3C !important}.green-text.text-darken-2{color:#388E3C !important}.green.darken-3{background-color:#2E7D32 !important}.green-text.text-darken-3{color:#2E7D32 !important}.green.darken-4{background-color:#1B5E20 !important}.green-text.text-darken-4{color:#1B5E20 !important}.green.accent-1{background-color:#B9F6CA !important}.green-text.text-accent-1{color:#B9F6CA !important}.green.accent-2{background-color:#69F0AE !important}.green-text.text-accent-2{color:#69F0AE !important}.green.accent-3{background-color:#00E676 !important}.green-text.text-accent-3{color:#00E676 !important}.green.accent-4{background-color:#00C853 !important}.green-text.text-accent-4{color:#00C853 !important}.light-green{background-color:#8bc34a !important}.light-green-text{color:#8bc34a !important}.light-green.lighten-5{background-color:#f1f8e9 !important}.light-green-text.text-lighten-5{color:#f1f8e9 !important}.light-green.lighten-4{background-color:#dcedc8 !important}.light-green-text.text-lighten-4{color:#dcedc8 !important}.light-green.lighten-3{background-color:#c5e1a5 !important}.light-green-text.text-lighten-3{color:#c5e1a5 !important}.light-green.lighten-2{background-color:#aed581 !important}.light-green-text.text-lighten-2{color:#aed581 !important}.light-green.lighten-1{background-color:#9ccc65 !important}.light-green-text.text-lighten-1{color:#9ccc65 !important}.light-green.darken-1{background-color:#7cb342 !important}.light-green-text.text-darken-1{color:#7cb342 !important}.light-green.darken-2{background-color:#689f38 !important}.light-green-text.text-darken-2{color:#689f38 !important}.light-green.darken-3{background-color:#558b2f !important}.light-green-text.text-darken-3{color:#558b2f !important}.light-green.darken-4{background-color:#33691e !important}.light-green-text.text-darken-4{color:#33691e !important}.light-green.accent-1{background-color:#ccff90 !important}.light-green-text.text-accent-1{color:#ccff90 !important}.light-green.accent-2{background-color:#b2ff59 !important}.light-green-text.text-accent-2{color:#b2ff59 !important}.light-green.accent-3{background-color:#76ff03 !important}.light-green-text.text-accent-3{color:#76ff03 !important}.light-green.accent-4{background-color:#64dd17 !important}.light-green-text.text-accent-4{color:#64dd17 !important}.lime{background-color:#cddc39 !important}.lime-text{color:#cddc39 !important}.lime.lighten-5{background-color:#f9fbe7 !important}.lime-text.text-lighten-5{color:#f9fbe7 !important}.lime.lighten-4{background-color:#f0f4c3 !important}.lime-text.text-lighten-4{color:#f0f4c3 !important}.lime.lighten-3{background-color:#e6ee9c !important}.lime-text.text-lighten-3{color:#e6ee9c !important}.lime.lighten-2{background-color:#dce775 !important}.lime-text.text-lighten-2{color:#dce775 !important}.lime.lighten-1{background-color:#d4e157 !important}.lime-text.text-lighten-1{color:#d4e157 !important}.lime.darken-1{background-color:#c0ca33 !important}.lime-text.text-darken-1{color:#c0ca33 !important}.lime.darken-2{background-color:#afb42b !important}.lime-text.text-darken-2{color:#afb42b !important}.lime.darken-3{background-color:#9e9d24 !important}.lime-text.text-darken-3{color:#9e9d24 !important}.lime.darken-4{background-color:#827717 !important}.lime-text.text-darken-4{color:#827717 !important}.lime.accent-1{background-color:#f4ff81 !important}.lime-text.text-accent-1{color:#f4ff81 !important}.lime.accent-2{background-color:#eeff41 !important}.lime-text.text-accent-2{color:#eeff41 !important}.lime.accent-3{background-color:#c6ff00 !important}.lime-text.text-accent-3{color:#c6ff00 !important}.lime.accent-4{background-color:#aeea00 !important}.lime-text.text-accent-4{color:#aeea00 !important}.yellow{background-color:#ffeb3b !important}.yellow-text{color:#ffeb3b !important}.yellow.lighten-5{background-color:#fffde7 !important}.yellow-text.text-lighten-5{color:#fffde7 !important}.yellow.lighten-4{background-color:#fff9c4 !important}.yellow-text.text-lighten-4{color:#fff9c4 !important}.yellow.lighten-3{background-color:#fff59d !important}.yellow-text.text-lighten-3{color:#fff59d !important}.yellow.lighten-2{background-color:#fff176 !important}.yellow-text.text-lighten-2{color:#fff176 !important}.yellow.lighten-1{background-color:#ffee58 !important}.yellow-text.text-lighten-1{color:#ffee58 !important}.yellow.darken-1{background-color:#fdd835 !important}.yellow-text.text-darken-1{color:#fdd835 !important}.yellow.darken-2{background-color:#fbc02d !important}.yellow-text.text-darken-2{color:#fbc02d !important}.yellow.darken-3{background-color:#f9a825 !important}.yellow-text.text-darken-3{color:#f9a825 !important}.yellow.darken-4{background-color:#f57f17 !important}.yellow-text.text-darken-4{color:#f57f17 !important}.yellow.accent-1{background-color:#ffff8d !important}.yellow-text.text-accent-1{color:#ffff8d !important}.yellow.accent-2{background-color:#ff0 !important}.yellow-text.text-accent-2{color:#ff0 !important}.yellow.accent-3{background-color:#ffea00 !important}.yellow-text.text-accent-3{color:#ffea00 !important}.yellow.accent-4{background-color:#ffd600 !important}.yellow-text.text-accent-4{color:#ffd600 !important}.amber{background-color:#ffc107 !important}.amber-text{color:#ffc107 !important}.amber.lighten-5{background-color:#fff8e1 !important}.amber-text.text-lighten-5{color:#fff8e1 !important}.amber.lighten-4{background-color:#ffecb3 !important}.amber-text.text-lighten-4{color:#ffecb3 !important}.amber.lighten-3{background-color:#ffe082 !important}.amber-text.text-lighten-3{color:#ffe082 !important}.amber.lighten-2{background-color:#ffd54f !important}.amber-text.text-lighten-2{color:#ffd54f !important}.amber.lighten-1{background-color:#ffca28 !important}.amber-text.text-lighten-1{color:#ffca28 !important}.amber.darken-1{background-color:#ffb300 !important}.amber-text.text-darken-1{color:#ffb300 !important}.amber.darken-2{background-color:#ffa000 !important}.amber-text.text-darken-2{color:#ffa000 !important}.amber.darken-3{background-color:#ff8f00 !important}.amber-text.text-darken-3{color:#ff8f00 !important}.amber.darken-4{background-color:#ff6f00 !important}.amber-text.text-darken-4{color:#ff6f00 !important}.amber.accent-1{background-color:#ffe57f !important}.amber-text.text-accent-1{color:#ffe57f !important}.amber.accent-2{background-color:#ffd740 !important}.amber-text.text-accent-2{color:#ffd740 !important}.amber.accent-3{background-color:#ffc400 !important}.amber-text.text-accent-3{color:#ffc400 !important}.amber.accent-4{background-color:#ffab00 !important}.amber-text.text-accent-4{color:#ffab00 !important}.orange{background-color:#ff9800 !important}.orange-text{color:#ff9800 !important}.orange.lighten-5{background-color:#fff3e0 !important}.orange-text.text-lighten-5{color:#fff3e0 !important}.orange.lighten-4{background-color:#ffe0b2 !important}.orange-text.text-lighten-4{color:#ffe0b2 !important}.orange.lighten-3{background-color:#ffcc80 !important}.orange-text.text-lighten-3{color:#ffcc80 !important}.orange.lighten-2{background-color:#ffb74d !important}.orange-text.text-lighten-2{color:#ffb74d !important}.orange.lighten-1{background-color:#ffa726 !important}.orange-text.text-lighten-1{color:#ffa726 !important}.orange.darken-1{background-color:#fb8c00 !important}.orange-text.text-darken-1{color:#fb8c00 !important}.orange.darken-2{background-color:#f57c00 !important}.orange-text.text-darken-2{color:#f57c00 !important}.orange.darken-3{background-color:#ef6c00 !important}.orange-text.text-darken-3{color:#ef6c00 !important}.orange.darken-4{background-color:#e65100 !important}.orange-text.text-darken-4{color:#e65100 !important}.orange.accent-1{background-color:#ffd180 !important}.orange-text.text-accent-1{color:#ffd180 !important}.orange.accent-2{background-color:#ffab40 !important}.orange-text.text-accent-2{color:#ffab40 !important}.orange.accent-3{background-color:#ff9100 !important}.orange-text.text-accent-3{color:#ff9100 !important}.orange.accent-4{background-color:#ff6d00 !important}.orange-text.text-accent-4{color:#ff6d00 !important}.deep-orange{background-color:#ff5722 !important}.deep-orange-text{color:#ff5722 !important}.deep-orange.lighten-5{background-color:#fbe9e7 !important}.deep-orange-text.text-lighten-5{color:#fbe9e7 !important}.deep-orange.lighten-4{background-color:#ffccbc !important}.deep-orange-text.text-lighten-4{color:#ffccbc !important}.deep-orange.lighten-3{background-color:#ffab91 !important}.deep-orange-text.text-lighten-3{color:#ffab91 !important}.deep-orange.lighten-2{background-color:#ff8a65 !important}.deep-orange-text.text-lighten-2{color:#ff8a65 !important}.deep-orange.lighten-1{background-color:#ff7043 !important}.deep-orange-text.text-lighten-1{color:#ff7043 !important}.deep-orange.darken-1{background-color:#f4511e !important}.deep-orange-text.text-darken-1{color:#f4511e !important}.deep-orange.darken-2{background-color:#e64a19 !important}.deep-orange-text.text-darken-2{color:#e64a19 !important}.deep-orange.darken-3{background-color:#d84315 !important}.deep-orange-text.text-darken-3{color:#d84315 !important}.deep-orange.darken-4{background-color:#bf360c !important}.deep-orange-text.text-darken-4{color:#bf360c !important}.deep-orange.accent-1{background-color:#ff9e80 !important}.deep-orange-text.text-accent-1{color:#ff9e80 !important}.deep-orange.accent-2{background-color:#ff6e40 !important}.deep-orange-text.text-accent-2{color:#ff6e40 !important}.deep-orange.accent-3{background-color:#ff3d00 !important}.deep-orange-text.text-accent-3{color:#ff3d00 !important}.deep-orange.accent-4{background-color:#dd2c00 !important}.deep-orange-text.text-accent-4{color:#dd2c00 !important}.brown{background-color:#795548 !important}.brown-text{color:#795548 !important}.brown.lighten-5{background-color:#efebe9 !important}.brown-text.text-lighten-5{color:#efebe9 !important}.brown.lighten-4{background-color:#d7ccc8 !important}.brown-text.text-lighten-4{color:#d7ccc8 !important}.brown.lighten-3{background-color:#bcaaa4 !important}.brown-text.text-lighten-3{color:#bcaaa4 !important}.brown.lighten-2{background-color:#a1887f !important}.brown-text.text-lighten-2{color:#a1887f !important}.brown.lighten-1{background-color:#8d6e63 !important}.brown-text.text-lighten-1{color:#8d6e63 !important}.brown.darken-1{background-color:#6d4c41 !important}.brown-text.text-darken-1{color:#6d4c41 !important}.brown.darken-2{background-color:#5d4037 !important}.brown-text.text-darken-2{color:#5d4037 !important}.brown.darken-3{background-color:#4e342e !important}.brown-text.text-darken-3{color:#4e342e !important}.brown.darken-4{background-color:#3e2723 !important}.brown-text.text-darken-4{color:#3e2723 !important}.blue-grey{background-color:#607d8b !important}.blue-grey-text{color:#607d8b !important}.blue-grey.lighten-5{background-color:#eceff1 !important}.blue-grey-text.text-lighten-5{color:#eceff1 !important}.blue-grey.lighten-4{background-color:#cfd8dc !important}.blue-grey-text.text-lighten-4{color:#cfd8dc !important}.blue-grey.lighten-3{background-color:#b0bec5 !important}.blue-grey-text.text-lighten-3{color:#b0bec5 !important}.blue-grey.lighten-2{background-color:#90a4ae !important}.blue-grey-text.text-lighten-2{color:#90a4ae !important}.blue-grey.lighten-1{background-color:#78909c !important}.blue-grey-text.text-lighten-1{color:#78909c !important}.blue-grey.darken-1{background-color:#546e7a !important}.blue-grey-text.text-darken-1{color:#546e7a !important}.blue-grey.darken-2{background-color:#455a64 !important}.blue-grey-text.text-darken-2{color:#455a64 !important}.blue-grey.darken-3{background-color:#37474f !important}.blue-grey-text.text-darken-3{color:#37474f !important}.blue-grey.darken-4{background-color:#263238 !important}.blue-grey-text.text-darken-4{color:#263238 !important}.grey{background-color:#9e9e9e !important}.grey-text{color:#9e9e9e !important}.grey.lighten-5{background-color:#fafafa !important}.grey-text.text-lighten-5{color:#fafafa !important}.grey.lighten-4{background-color:#f5f5f5 !important}.grey-text.text-lighten-4{color:#f5f5f5 !important}.grey.lighten-3{background-color:#eee !important}.grey-text.text-lighten-3{color:#eee !important}.grey.lighten-2{background-color:#e0e0e0 !important}.grey-text.text-lighten-2{color:#e0e0e0 !important}.grey.lighten-1{background-color:#bdbdbd !important}.grey-text.text-lighten-1{color:#bdbdbd !important}.grey.darken-1{background-color:#757575 !important}.grey-text.text-darken-1{color:#757575 !important}.grey.darken-2{background-color:#616161 !important}.grey-text.text-darken-2{color:#616161 !important}.grey.darken-3{background-color:#424242 !important}.grey-text.text-darken-3{color:#424242 !important}.grey.darken-4{background-color:#212121 !important}.grey-text.text-darken-4{color:#212121 !important}.black{background-color:#000 !important}.black-text{color:#000 !important}.white{background-color:#fff !important}.white-text{color:#fff !important}.transparent{background-color:transparent !important}.transparent-text{color:transparent !important}/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}ul:not(.browser-default){padding-left:0;list-style-type:none}ul:not(.browser-default) li{list-style-type:none}a{color:#039be5;text-decoration:none;-webkit-tap-highlight-color:transparent}.valign-wrapper{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.valign-wrapper .valign{display:block}.clearfix{clear:both}.z-depth-0{box-shadow:none !important}.z-depth-1,nav,.card-panel,.card,.toast,.btn,.btn-large,.btn-floating,.dropdown-content,.collapsible,.side-nav{box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2)}.z-depth-1-half,.btn:hover,.btn-large:hover,.btn-floating:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2)}.z-depth-2{box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)}.z-depth-3{box-shadow:0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12),0 3px 5px -1px rgba(0,0,0,0.3)}.z-depth-4,.modal{box-shadow:0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.3)}.z-depth-5{box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.3)}.hoverable{transition:box-shadow .25s;box-shadow:0}.hoverable:hover{transition:box-shadow .25s;box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}.divider{height:1px;overflow:hidden;background-color:#e0e0e0}blockquote{margin:20px 0;padding-left:1.5rem;border-left:5px solid #ee6e73}i{line-height:inherit}i.left{float:left;margin-right:15px}i.right{float:right;margin-left:15px}i.tiny{font-size:1rem}i.small{font-size:2rem}i.medium{font-size:4rem}i.large{font-size:6rem}img.responsive-img,video.responsive-video{max-width:100%;height:auto}.pagination li{display:inline-block;border-radius:2px;text-align:center;vertical-align:top;height:30px}.pagination li a{color:#444;display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px}.pagination li.active a{color:#fff}.pagination li.active{background-color:#ee6e73}.pagination li.disabled a{cursor:default;color:#999}.pagination li i{font-size:2rem}.pagination li.pages ul li{display:inline-block;float:none}@media only screen and (max-width: 992px){.pagination{width:100%}.pagination li.prev,.pagination li.next{width:10%}.pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}.breadcrumb{font-size:18px;color:rgba(255,255,255,0.7)}.breadcrumb i,.breadcrumb [class^=\"mdi-\"],.breadcrumb [class*=\"mdi-\"],.breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}.breadcrumb:before{content:'\\E5CC';color:rgba(255,255,255,0.7);vertical-align:top;display:inline-block;font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}.breadcrumb:first-child:before{display:none}.breadcrumb:last-child{color:#fff}.parallax-container{position:relative;overflow:hidden;height:500px}.parallax{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}.parallax img{display:none;position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transform:translateX(-50%);transform:translateX(-50%)}.pin-top,.pin-bottom{position:relative}.pinned{position:fixed !important}ul.staggered-list li{opacity:0}.fade-in{opacity:0;-webkit-transform-origin:0 50%;transform-origin:0 50%}@media only screen and (max-width: 600px){.hide-on-small-only,.hide-on-small-and-down{display:none !important}}@media only screen and (max-width: 992px){.hide-on-med-and-down{display:none !important}}@media only screen and (min-width: 601px){.hide-on-med-and-up{display:none !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.hide-on-med-only{display:none !important}}@media only screen and (min-width: 993px){.hide-on-large-only{display:none !important}}@media only screen and (min-width: 993px){.show-on-large{display:block !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.show-on-medium{display:block !important}}@media only screen and (max-width: 600px){.show-on-small{display:block !important}}@media only screen and (min-width: 601px){.show-on-medium-and-up{display:block !important}}@media only screen and (max-width: 992px){.show-on-medium-and-down{display:block !important}}@media only screen and (max-width: 600px){.center-on-small-only{text-align:center}}footer.page-footer{padding-top:20px;background-color:#ee6e73}footer.page-footer .footer-copyright{overflow:hidden;min-height:50px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:10px 0px;color:rgba(255,255,255,0.8);background-color:rgba(51,51,51,0.08)}table,th,td{border:none}table{width:100%;display:table}table.bordered>thead>tr,table.bordered>tbody>tr{border-bottom:1px solid #d0d0d0}table.striped>tbody>tr:nth-child(odd){background-color:#f2f2f2}table.striped>tbody>tr>td{border-radius:0}table.highlight>tbody>tr{transition:background-color .25s ease}table.highlight>tbody>tr:hover{background-color:#f2f2f2}table.centered thead tr th,table.centered tbody tr td{text-align:center}thead{border-bottom:1px solid #d0d0d0}td,th{padding:15px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}@media only screen and (max-width: 992px){table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}table.responsive-table td:empty:before{content:'\\00a0'}table.responsive-table th,table.responsive-table td{margin:0;vertical-align:top}table.responsive-table th{text-align:left}table.responsive-table thead{display:block;float:left}table.responsive-table thead tr{display:block;padding:0 10px 0 0}table.responsive-table thead tr th::before{content:\"\\00a0\"}table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}table.responsive-table tbody tr{display:inline-block;vertical-align:top}table.responsive-table th{display:block;text-align:right}table.responsive-table td{display:block;min-height:1.25em;text-align:left}table.responsive-table tr{padding:0 10px}table.responsive-table thead{border:0;border-right:1px solid #d0d0d0}table.responsive-table.bordered th{border-bottom:0;border-left:0}table.responsive-table.bordered td{border-left:0;border-right:0;border-bottom:0}table.responsive-table.bordered tr{border:0}table.responsive-table.bordered tbody tr{border-right:1px solid #d0d0d0}}.collection{margin:.5rem 0 1rem 0;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}.collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}.collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}.collection .collection-item.avatar .circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}.collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}.collection .collection-item.avatar .title{font-size:16px}.collection .collection-item.avatar p{margin:0}.collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}.collection .collection-item:last-child{border-bottom:none}.collection .collection-item.active{background-color:#26a69a;color:#eafaf9}.collection .collection-item.active .secondary-content{color:#fff}.collection a.collection-item{display:block;transition:.25s;color:#26a69a}.collection a.collection-item:not(.active):hover{background-color:#ddd}.collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}.collection.with-header .collection-item{padding-left:30px}.collection.with-header .collection-item.avatar{padding-left:72px}.secondary-content{float:right;color:#26a69a}.collapsible .collection{margin:0;border:none}.video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}.progress{position:relative;height:4px;display:block;width:100%;background-color:#acece6;border-radius:2px;margin:.5rem 0 1rem 0;overflow:hidden}.progress .determinate{position:absolute;top:0;left:0;bottom:0;background-color:#26a69a;transition:width .3s linear}.progress .indeterminate{background-color:#26a69a}.progress .indeterminate:before{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}.progress .indeterminate:after{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}@-webkit-keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}.hide{display:none !important}.left-align{text-align:left}.right-align{text-align:right}.center,.center-align{text-align:center}.left{float:left !important}.right{float:right !important}.no-select,input[type=range],input[type=range]+.thumb{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.circle{border-radius:50%}.center-block{display:block;margin-left:auto;margin-right:auto}.truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-padding{padding:0 !important}span.badge{min-width:3rem;padding:0 6px;margin-left:14px;text-align:center;font-size:1rem;line-height:22px;height:22px;color:#757575;float:right;box-sizing:border-box}span.badge.new{font-weight:300;font-size:0.8rem;color:#fff;background-color:#26a69a;border-radius:2px}span.badge.new:after{content:\" new\"}span.badge[data-badge-caption]::after{content:\" \" attr(data-badge-caption)}nav ul a span.badge{display:inline-block;float:none;margin-left:4px;line-height:22px;height:22px}.collection-item span.badge{margin-top:calc(.75rem - 11px)}.collapsible span.badge{margin-top:calc(1.5rem - 11px)}.side-nav span.badge{margin-top:calc(24px - 11px)}.material-icons{text-rendering:optimizeLegibility;-webkit-font-feature-settings:'liga';-moz-font-feature-settings:'liga';font-feature-settings:'liga'}.container{margin:0 auto;max-width:1280px;width:90%}@media only screen and (min-width: 601px){.container{width:85%}}@media only screen and (min-width: 993px){.container{width:70%}}.container .row{margin-left:-.75rem;margin-right:-.75rem}.section{padding-top:1rem;padding-bottom:1rem}.section.no-pad{padding:0}.section.no-pad-bot{padding-bottom:0}.section.no-pad-top{padding-top:0}.row{margin-left:auto;margin-right:auto;margin-bottom:20px}.row:after{content:\"\";display:table;clear:both}.row .col{float:left;box-sizing:border-box;padding:0 .75rem;min-height:1px}.row .col[class*=\"push-\"],.row .col[class*=\"pull-\"]{position:relative}.row .col.s1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.s4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.s7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.s10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-s1{margin-left:8.3333333333%}.row .col.pull-s1{right:8.3333333333%}.row .col.push-s1{left:8.3333333333%}.row .col.offset-s2{margin-left:16.6666666667%}.row .col.pull-s2{right:16.6666666667%}.row .col.push-s2{left:16.6666666667%}.row .col.offset-s3{margin-left:25%}.row .col.pull-s3{right:25%}.row .col.push-s3{left:25%}.row .col.offset-s4{margin-left:33.3333333333%}.row .col.pull-s4{right:33.3333333333%}.row .col.push-s4{left:33.3333333333%}.row .col.offset-s5{margin-left:41.6666666667%}.row .col.pull-s5{right:41.6666666667%}.row .col.push-s5{left:41.6666666667%}.row .col.offset-s6{margin-left:50%}.row .col.pull-s6{right:50%}.row .col.push-s6{left:50%}.row .col.offset-s7{margin-left:58.3333333333%}.row .col.pull-s7{right:58.3333333333%}.row .col.push-s7{left:58.3333333333%}.row .col.offset-s8{margin-left:66.6666666667%}.row .col.pull-s8{right:66.6666666667%}.row .col.push-s8{left:66.6666666667%}.row .col.offset-s9{margin-left:75%}.row .col.pull-s9{right:75%}.row .col.push-s9{left:75%}.row .col.offset-s10{margin-left:83.3333333333%}.row .col.pull-s10{right:83.3333333333%}.row .col.push-s10{left:83.3333333333%}.row .col.offset-s11{margin-left:91.6666666667%}.row .col.pull-s11{right:91.6666666667%}.row .col.push-s11{left:91.6666666667%}.row .col.offset-s12{margin-left:100%}.row .col.pull-s12{right:100%}.row .col.push-s12{left:100%}@media only screen and (min-width: 601px){.row .col.m1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.m7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-m1{margin-left:8.3333333333%}.row .col.pull-m1{right:8.3333333333%}.row .col.push-m1{left:8.3333333333%}.row .col.offset-m2{margin-left:16.6666666667%}.row .col.pull-m2{right:16.6666666667%}.row .col.push-m2{left:16.6666666667%}.row .col.offset-m3{margin-left:25%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.3333333333%}.row .col.pull-m4{right:33.3333333333%}.row .col.push-m4{left:33.3333333333%}.row .col.offset-m5{margin-left:41.6666666667%}.row .col.pull-m5{right:41.6666666667%}.row .col.push-m5{left:41.6666666667%}.row .col.offset-m6{margin-left:50%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.3333333333%}.row .col.pull-m7{right:58.3333333333%}.row .col.push-m7{left:58.3333333333%}.row .col.offset-m8{margin-left:66.6666666667%}.row .col.pull-m8{right:66.6666666667%}.row .col.push-m8{left:66.6666666667%}.row .col.offset-m9{margin-left:75%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.3333333333%}.row .col.pull-m10{right:83.3333333333%}.row .col.push-m10{left:83.3333333333%}.row .col.offset-m11{margin-left:91.6666666667%}.row .col.pull-m11{right:91.6666666667%}.row .col.push-m11{left:91.6666666667%}.row .col.offset-m12{margin-left:100%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}@media only screen and (min-width: 993px){.row .col.l1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.l7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-l1{margin-left:8.3333333333%}.row .col.pull-l1{right:8.3333333333%}.row .col.push-l1{left:8.3333333333%}.row .col.offset-l2{margin-left:16.6666666667%}.row .col.pull-l2{right:16.6666666667%}.row .col.push-l2{left:16.6666666667%}.row .col.offset-l3{margin-left:25%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.3333333333%}.row .col.pull-l4{right:33.3333333333%}.row .col.push-l4{left:33.3333333333%}.row .col.offset-l5{margin-left:41.6666666667%}.row .col.pull-l5{right:41.6666666667%}.row .col.push-l5{left:41.6666666667%}.row .col.offset-l6{margin-left:50%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.3333333333%}.row .col.pull-l7{right:58.3333333333%}.row .col.push-l7{left:58.3333333333%}.row .col.offset-l8{margin-left:66.6666666667%}.row .col.pull-l8{right:66.6666666667%}.row .col.push-l8{left:66.6666666667%}.row .col.offset-l9{margin-left:75%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.3333333333%}.row .col.pull-l10{right:83.3333333333%}.row .col.push-l10{left:83.3333333333%}.row .col.offset-l11{margin-left:91.6666666667%}.row .col.pull-l11{right:91.6666666667%}.row .col.push-l11{left:91.6666666667%}.row .col.offset-l12{margin-left:100%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}nav{color:#fff;background-color:#ee6e73;width:100%;height:56px;line-height:56px}nav.nav-extended{height:auto}nav.nav-extended .nav-wrapper{min-height:56px;height:auto}nav.nav-extended .nav-content{position:relative;line-height:normal}nav a{color:#fff}nav i,nav [class^=\"mdi-\"],nav [class*=\"mdi-\"],nav i.material-icons{display:block;font-size:24px;height:56px;line-height:56px}nav .nav-wrapper{position:relative;height:100%}@media only screen and (min-width: 993px){nav a.button-collapse{display:none}}nav .button-collapse{float:left;position:relative;z-index:1;height:56px;margin:0 18px}nav .button-collapse i{height:56px;line-height:56px}nav .brand-logo{position:absolute;color:#fff;display:inline-block;font-size:2.1rem;padding:0;white-space:nowrap}nav .brand-logo.center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media only screen and (max-width: 992px){nav .brand-logo{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}nav .brand-logo.left,nav .brand-logo.right{padding:0;-webkit-transform:none;transform:none}nav .brand-logo.left{left:0.5rem}nav .brand-logo.right{right:0.5rem;left:auto}}nav .brand-logo.right{right:0.5rem;padding:0}nav .brand-logo i,nav .brand-logo [class^=\"mdi-\"],nav .brand-logo [class*=\"mdi-\"],nav .brand-logo i.material-icons{float:left;margin-right:15px}nav .nav-title{display:inline-block;font-size:32px;padding:28px 0}nav ul{margin:0}nav ul li{transition:background-color .3s;float:left;padding:0}nav ul li.active{background-color:rgba(0,0,0,0.1)}nav ul a{transition:background-color .3s;font-size:1rem;color:#fff;display:block;padding:0 15px;cursor:pointer}nav ul a.btn,nav ul a.btn-large,nav ul a.btn-large,nav ul a.btn-flat,nav ul a.btn-floating{margin-top:-2px;margin-left:15px;margin-right:15px}nav ul a.btn>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-flat>.material-icons,nav ul a.btn-floating>.material-icons{height:inherit;line-height:inherit}nav ul a:hover{background-color:rgba(0,0,0,0.1)}nav ul.left{float:left}nav form{height:100%}nav .input-field{margin:0;height:100%}nav .input-field input{height:100%;font-size:1.2rem;border:none;padding-left:2rem}nav .input-field input:focus,nav .input-field input[type=text]:valid,nav .input-field input[type=password]:valid,nav .input-field input[type=email]:valid,nav .input-field input[type=url]:valid,nav .input-field input[type=date]:valid{border:none;box-shadow:none}nav .input-field label{top:0;left:0}nav .input-field label i{color:rgba(255,255,255,0.7);transition:color .3s}nav .input-field label.active i{color:#fff}.navbar-fixed{position:relative;height:56px;z-index:997}.navbar-fixed nav{position:fixed}@media only screen and (min-width: 601px){nav.nav-extended .nav-wrapper{min-height:64px}nav,nav .nav-wrapper i,nav a.button-collapse,nav a.button-collapse i{height:64px;line-height:64px}.navbar-fixed{height:64px}}@font-face{font-family:\"Roboto\";src:local(Roboto Thin),url(\"../fonts/roboto/Roboto-Thin.eot\");src:url(\"../fonts/roboto/Roboto-Thin.eot?#iefix\") format(\"embedded-opentype\"),url(\"../fonts/roboto/Roboto-Thin.woff2\") format(\"woff2\"),url(\"../fonts/roboto/Roboto-Thin.woff\") format(\"woff\"),url(\"../fonts/roboto/Roboto-Thin.ttf\") format(\"truetype\");font-weight:200}@font-face{font-family:\"Roboto\";src:local(Roboto Light),url(\"../fonts/roboto/Roboto-Light.eot\");src:url(\"../fonts/roboto/Roboto-Light.eot?#iefix\") format(\"embedded-opentype\"),url(\"../fonts/roboto/Roboto-Light.woff2\") format(\"woff2\"),url(\"../fonts/roboto/Roboto-Light.woff\") format(\"woff\"),url(\"../fonts/roboto/Roboto-Light.ttf\") format(\"truetype\");font-weight:300}@font-face{font-family:\"Roboto\";src:local(Roboto Regular),url(\"../fonts/roboto/Roboto-Regular.eot\");src:url(\"../fonts/roboto/Roboto-Regular.eot?#iefix\") format(\"embedded-opentype\"),url(\"../fonts/roboto/Roboto-Regular.woff2\") format(\"woff2\"),url(\"../fonts/roboto/Roboto-Regular.woff\") format(\"woff\"),url(\"../fonts/roboto/Roboto-Regular.ttf\") format(\"truetype\");font-weight:400}@font-face{font-family:\"Roboto\";src:url(\"../fonts/roboto/Roboto-Medium.eot\");src:url(\"../fonts/roboto/Roboto-Medium.eot?#iefix\") format(\"embedded-opentype\"),url(\"../fonts/roboto/Roboto-Medium.woff2\") format(\"woff2\"),url(\"../fonts/roboto/Roboto-Medium.woff\") format(\"woff\"),url(\"../fonts/roboto/Roboto-Medium.ttf\") format(\"truetype\");font-weight:500}@font-face{font-family:\"Roboto\";src:url(\"../fonts/roboto/Roboto-Bold.eot\");src:url(\"../fonts/roboto/Roboto-Bold.eot?#iefix\") format(\"embedded-opentype\"),url(\"../fonts/roboto/Roboto-Bold.woff2\") format(\"woff2\"),url(\"../fonts/roboto/Roboto-Bold.woff\") format(\"woff\"),url(\"../fonts/roboto/Roboto-Bold.ttf\") format(\"truetype\");font-weight:700}a{text-decoration:none}html{line-height:1.5;font-family:\"Roboto\", sans-serif;font-weight:normal;color:rgba(0,0,0,0.87)}@media only screen and (min-width: 0){html{font-size:14px}}@media only screen and (min-width: 992px){html{font-size:14.5px}}@media only screen and (min-width: 1200px){html{font-size:15px}}h1,h2,h3,h4,h5,h6{font-weight:400;line-height:1.1}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{font-weight:inherit}h1{font-size:4.2rem;line-height:110%;margin:2.1rem 0 1.68rem 0}h2{font-size:3.56rem;line-height:110%;margin:1.78rem 0 1.424rem 0}h3{font-size:2.92rem;line-height:110%;margin:1.46rem 0 1.168rem 0}h4{font-size:2.28rem;line-height:110%;margin:1.14rem 0 .912rem 0}h5{font-size:1.64rem;line-height:110%;margin:.82rem 0 .656rem 0}h6{font-size:1rem;line-height:110%;margin:.5rem 0 .4rem 0}em{font-style:italic}strong{font-weight:500}small{font-size:75%}.light,footer.page-footer .footer-copyright{font-weight:300}.thin{font-weight:200}.flow-text{font-weight:300}@media only screen and (min-width: 360px){.flow-text{font-size:1.2rem}}@media only screen and (min-width: 390px){.flow-text{font-size:1.224rem}}@media only screen and (min-width: 420px){.flow-text{font-size:1.248rem}}@media only screen and (min-width: 450px){.flow-text{font-size:1.272rem}}@media only screen and (min-width: 480px){.flow-text{font-size:1.296rem}}@media only screen and (min-width: 510px){.flow-text{font-size:1.32rem}}@media only screen and (min-width: 540px){.flow-text{font-size:1.344rem}}@media only screen and (min-width: 570px){.flow-text{font-size:1.368rem}}@media only screen and (min-width: 600px){.flow-text{font-size:1.392rem}}@media only screen and (min-width: 630px){.flow-text{font-size:1.416rem}}@media only screen and (min-width: 660px){.flow-text{font-size:1.44rem}}@media only screen and (min-width: 690px){.flow-text{font-size:1.464rem}}@media only screen and (min-width: 720px){.flow-text{font-size:1.488rem}}@media only screen and (min-width: 750px){.flow-text{font-size:1.512rem}}@media only screen and (min-width: 780px){.flow-text{font-size:1.536rem}}@media only screen and (min-width: 810px){.flow-text{font-size:1.56rem}}@media only screen and (min-width: 840px){.flow-text{font-size:1.584rem}}@media only screen and (min-width: 870px){.flow-text{font-size:1.608rem}}@media only screen and (min-width: 900px){.flow-text{font-size:1.632rem}}@media only screen and (min-width: 930px){.flow-text{font-size:1.656rem}}@media only screen and (min-width: 960px){.flow-text{font-size:1.68rem}}@media only screen and (max-width: 360px){.flow-text{font-size:1.2rem}}.scale-transition{transition:-webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important}.scale-transition.scale-out{-webkit-transform:scale(0);transform:scale(0);transition:-webkit-transform .2s !important;transition:transform .2s !important;transition:transform .2s, -webkit-transform .2s !important}.scale-transition.scale-in{-webkit-transform:scale(1);transform:scale(1)}.card-panel{transition:box-shadow .25s;padding:24px;margin:.5rem 0 1rem 0;border-radius:2px;background-color:#fff}.card{position:relative;margin:.5rem 0 1rem 0;background-color:#fff;transition:box-shadow .25s;border-radius:2px}.card .card-title{font-size:24px;font-weight:300}.card .card-title.activator{cursor:pointer}.card.small,.card.medium,.card.large{position:relative}.card.small .card-image,.card.medium .card-image,.card.large .card-image{max-height:60%;overflow:hidden}.card.small .card-image+.card-content,.card.medium .card-image+.card-content,.card.large .card-image+.card-content{max-height:40%}.card.small .card-content,.card.medium .card-content,.card.large .card-content{max-height:100%;overflow:hidden}.card.small .card-action,.card.medium .card-action,.card.large .card-action{position:absolute;bottom:0;left:0;right:0}.card.small{height:300px}.card.medium{height:400px}.card.large{height:500px}.card.horizontal{display:-webkit-flex;display:-ms-flexbox;display:flex}.card.horizontal.small .card-image,.card.horizontal.medium .card-image,.card.horizontal.large .card-image{height:100%;max-height:none;overflow:visible}.card.horizontal.small .card-image img,.card.horizontal.medium .card-image img,.card.horizontal.large .card-image img{height:100%}.card.horizontal .card-image{max-width:50%}.card.horizontal .card-image img{border-radius:2px 0 0 2px;max-width:100%;width:auto}.card.horizontal .card-stacked{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;position:relative}.card.horizontal .card-stacked .card-content{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.card.sticky-action .card-action{z-index:2}.card.sticky-action .card-reveal{z-index:1;padding-bottom:64px}.card .card-image{position:relative}.card .card-image img{display:block;border-radius:2px 2px 0 0;position:relative;left:0;right:0;top:0;bottom:0;width:100%}.card .card-image .card-title{color:#fff;position:absolute;bottom:0;left:0;max-width:100%;padding:24px}.card .card-content{padding:24px;border-radius:0 0 2px 2px}.card .card-content p{margin:0;color:inherit}.card .card-content .card-title{display:block;line-height:32px;margin-bottom:8px}.card .card-content .card-title i{line-height:32px}.card .card-action{position:relative;background-color:inherit;border-top:1px solid rgba(160,160,160,0.2);padding:16px 24px}.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating){color:#ffab40;margin-right:24px;transition:color .3s ease;text-transform:uppercase}.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover{color:#ffd8a6}.card .card-reveal{padding:24px;position:absolute;background-color:#fff;width:100%;overflow-y:auto;left:0;top:100%;height:100%;z-index:3;display:none}.card .card-reveal .card-title{cursor:pointer;display:block}#toast-container{display:block;position:fixed;z-index:10000}@media only screen and (max-width: 600px){#toast-container{min-width:100%;bottom:0%}}@media only screen and (min-width: 601px) and (max-width: 992px){#toast-container{left:5%;bottom:7%;max-width:90%}}@media only screen and (min-width: 993px){#toast-container{top:10%;right:7%;max-width:86%}}.toast{border-radius:2px;top:35px;width:auto;clear:both;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;word-break:break-all;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.toast .btn,.toast .btn-large,.toast .btn-flat{margin:0;margin-left:3rem}.toast.rounded{border-radius:24px}@media only screen and (max-width: 600px){.toast{width:100%;border-radius:0}}@media only screen and (min-width: 601px) and (max-width: 992px){.toast{float:left}}@media only screen and (min-width: 993px){.toast{float:right}}.tabs{position:relative;overflow-x:auto;overflow-y:hidden;height:48px;width:100%;background-color:#fff;margin:0 auto;white-space:nowrap}.tabs.tabs-transparent{background-color:transparent}.tabs.tabs-transparent .tab a,.tabs.tabs-transparent .tab.disabled a,.tabs.tabs-transparent .tab.disabled a:hover{color:rgba(255,255,255,0.7)}.tabs.tabs-transparent .tab a:hover,.tabs.tabs-transparent .tab a.active{color:#fff}.tabs.tabs-transparent .indicator{background-color:#fff}.tabs.tabs-fixed-width{display:-webkit-flex;display:-ms-flexbox;display:flex}.tabs.tabs-fixed-width .tab{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.tabs .tab{display:inline-block;text-align:center;line-height:48px;height:48px;padding:0;margin:0;text-transform:uppercase}.tabs .tab a{color:rgba(238,110,115,0.7);display:block;width:100%;height:100%;padding:0 24px;font-size:14px;text-overflow:ellipsis;overflow:hidden;transition:color .28s ease}.tabs .tab a:hover,.tabs .tab a.active{background-color:transparent;color:#ee6e73}.tabs .tab.disabled a,.tabs .tab.disabled a:hover{color:rgba(238,110,115,0.7);cursor:default}.tabs .indicator{position:absolute;bottom:0;height:2px;background-color:#f6b2b5;will-change:left, right}@media only screen and (max-width: 992px){.tabs{display:-webkit-flex;display:-ms-flexbox;display:flex}.tabs .tab{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.tabs .tab a{padding:0 12px}}.material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:transparent;border-radius:2px;color:#fff;min-height:36px;line-height:120%;opacity:0;position:absolute;text-align:center;max-width:calc(100% - 4px);overflow:hidden;left:0;top:0;pointer-events:none;visibility:hidden}.backdrop{position:absolute;opacity:0;height:7px;width:14px;border-radius:0 0 50% 50%;background-color:#323232;z-index:-1;-webkit-transform-origin:50% 0%;transform-origin:50% 0%;visibility:hidden}.btn,.btn-large,.btn-flat{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 2rem;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn.disabled,.disabled.btn-large,.btn-floating.disabled,.btn-large.disabled,.btn-flat.disabled,.btn:disabled,.btn-large:disabled,.btn-floating:disabled,.btn-large:disabled,.btn-flat:disabled,.btn[disabled],[disabled].btn-large,.btn-floating[disabled],.btn-large[disabled],.btn-flat[disabled]{pointer-events:none;background-color:#DFDFDF !important;box-shadow:none;color:#9F9F9F !important;cursor:default}.btn.disabled:hover,.disabled.btn-large:hover,.btn-floating.disabled:hover,.btn-large.disabled:hover,.btn-flat.disabled:hover,.btn:disabled:hover,.btn-large:disabled:hover,.btn-floating:disabled:hover,.btn-large:disabled:hover,.btn-flat:disabled:hover,.btn[disabled]:hover,[disabled].btn-large:hover,.btn-floating[disabled]:hover,.btn-large[disabled]:hover,.btn-flat[disabled]:hover{background-color:#DFDFDF !important;color:#9F9F9F !important}.btn,.btn-large,.btn-floating,.btn-large,.btn-flat{outline:0}.btn i,.btn-large i,.btn-floating i,.btn-large i,.btn-flat i{font-size:1.3rem;line-height:inherit}.btn:focus,.btn-large:focus,.btn-floating:focus{background-color:#1d7d74}.btn,.btn-large{text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;letter-spacing:.5px;transition:.2s ease-out;cursor:pointer}.btn:hover,.btn-large:hover{background-color:#2bbbad}.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#26a69a;border-radius:50%;transition:.3s;cursor:pointer;vertical-align:middle}.btn-floating:hover{background-color:#26a69a}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:56px;height:56px}.btn-floating.btn-large i{line-height:56px}.btn-floating.halfway-fab{position:absolute;right:24px;bottom:0;-webkit-transform:translateY(50%);transform:translateY(50%)}.btn-floating.halfway-fab.left{right:auto;left:24px}.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:998}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.horizontal{padding:0 0 0 15px}.fixed-action-btn.horizontal ul{text-align:right;right:64px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:100%;left:auto;width:500px}.fixed-action-btn.horizontal ul li{display:inline-block;margin:15px 15px 0 0}.fixed-action-btn.toolbar{padding:0;height:56px}.fixed-action-btn.toolbar.active>a i{opacity:0}.fixed-action-btn.toolbar ul{display:-webkit-flex;display:-ms-flexbox;display:flex;top:0;bottom:0}.fixed-action-btn.toolbar ul li{-webkit-flex:1;-ms-flex:1;flex:1;display:inline-block;margin:0;height:100%;transition:none}.fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;box-shadow:none;color:#fff;line-height:56px;z-index:1}.fixed-action-btn.toolbar ul li a i{line-height:inherit}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#26a69a;border-radius:50%;-webkit-transform:scale(0);transform:scale(0)}.btn-flat{box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;transition:background-color .2s}.btn-flat:focus,.btn-flat:active{background-color:transparent}.btn-flat:focus,.btn-flat:hover{background-color:rgba(0,0,0,0.1);box-shadow:none}.btn-flat:active{background-color:rgba(0,0,0,0.2)}.btn-flat.disabled{background-color:transparent !important;color:#b3b3b3 !important;cursor:default}.btn-large{height:54px;line-height:54px}.btn-large i{font-size:1.6rem}.btn-block{display:block}.dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;max-height:650px;overflow-y:auto;opacity:0;position:absolute;z-index:999;will-change:width, height}.dropdown-content li{clear:both;color:rgba(0,0,0,0.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left;text-transform:none}.dropdown-content li:hover,.dropdown-content li.active,.dropdown-content li.selected{background-color:#eee}.dropdown-content li.active.selected{background-color:#e1e1e1}.dropdown-content li.divider{min-height:0;height:1px}.dropdown-content li>a,.dropdown-content li>span{font-size:16px;color:#26a69a;display:block;line-height:22px;padding:14px 16px}.dropdown-content li>span>label{top:1px;left:0;height:18px}.dropdown-content li>a>i{height:inherit;line-height:inherit}.input-field.col .dropdown-content [type=\"checkbox\"]+label{top:1px;left:0;height:18px}/*!\n * Waves v0.6.0\n * http://fian.my.id/Waves\n *\n * Copyright 2014 Alfiana E. Sibuea and other contributors\n * Released under the MIT license\n * https://github.com/fians/Waves/blob/master/LICENSE\n */.waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;transition:.3s ease-out}.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,0.2);transition:all 0.7s ease-out;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;-webkit-transform:scale(0);transform:scale(0);pointer-events:none}.waves-effect.waves-light .waves-ripple{background-color:rgba(255,255,255,0.45)}.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,0.7)}.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,0.7)}.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,0.7)}.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,0.7)}.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,0.7)}.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,0.7)}.waves-effect input[type=\"button\"],.waves-effect input[type=\"reset\"],.waves-effect input[type=\"submit\"]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}.waves-effect img{position:relative;z-index:-1}.waves-notransition{transition:none !important}.waves-circle{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle, #fff 100%, #000 100%)}.waves-input-wrapper{border-radius:0.2em;vertical-align:bottom}.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}.waves-block{display:block}.waves-effect .waves-ripple{z-index:-1}.modal{display:none;position:fixed;left:0;right:0;background-color:#fafafa;padding:0;max-height:70%;width:55%;margin:auto;overflow-y:auto;border-radius:2px;will-change:top, opacity}@media only screen and (max-width: 992px){.modal{width:80%}}.modal h1,.modal h2,.modal h3,.modal h4{margin-top:0}.modal .modal-content{padding:24px}.modal .modal-close{cursor:pointer}.modal .modal-footer{border-radius:0 0 2px 2px;background-color:#fafafa;padding:4px 6px;height:56px;width:100%}.modal .modal-footer .btn,.modal .modal-footer .btn-large,.modal .modal-footer .btn-flat{float:right;margin:6px 0}.modal-overlay{position:fixed;z-index:999;top:-100px;left:0;bottom:0;right:0;height:125%;width:100%;background:#000;display:none;will-change:opacity}.modal.modal-fixed-footer{padding:0;height:70%}.modal.modal-fixed-footer .modal-content{position:absolute;height:calc(100% - 56px);max-height:100%;width:100%;overflow-y:auto}.modal.modal-fixed-footer .modal-footer{border-top:1px solid rgba(0,0,0,0.1);position:absolute;bottom:0}.modal.bottom-sheet{top:auto;bottom:-100%;margin:0;width:100%;max-height:45%;border-radius:0;will-change:bottom, opacity}.collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:.5rem 0 1rem 0}.collapsible-header{display:block;cursor:pointer;min-height:3rem;line-height:3rem;padding:0 1rem;background-color:#fff;border-bottom:1px solid #ddd}.collapsible-header i{width:2rem;font-size:1.6rem;line-height:3rem;display:block;float:left;text-align:center;margin-right:1rem}.collapsible-body{display:none;border-bottom:1px solid #ddd;box-sizing:border-box;padding:2rem}.side-nav .collapsible,.side-nav.fixed .collapsible{border:none;box-shadow:none}.side-nav .collapsible li,.side-nav.fixed .collapsible li{padding:0}.side-nav .collapsible-header,.side-nav.fixed .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;padding:0 16px}.side-nav .collapsible-header:hover,.side-nav.fixed .collapsible-header:hover{background-color:rgba(0,0,0,0.05)}.side-nav .collapsible-header i,.side-nav.fixed .collapsible-header i{line-height:inherit}.side-nav .collapsible-body,.side-nav.fixed .collapsible-body{border:0;background-color:#fff}.side-nav .collapsible-body li a,.side-nav.fixed .collapsible-body li a{padding:0 23.5px 0 31px}.collapsible.popout{border:none;box-shadow:none}.collapsible.popout>li{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);margin:0 24px;transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.collapsible.popout>li.active{box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);margin:16px 0}.chip{display:inline-block;height:32px;font-size:13px;font-weight:500;color:rgba(0,0,0,0.6);line-height:32px;padding:0 12px;border-radius:16px;background-color:#e4e4e4;margin-bottom:5px;margin-right:5px}.chip img{float:left;margin:0 8px 0 -12px;height:32px;width:32px;border-radius:50%}.chip .close{cursor:pointer;float:right;font-size:16px;line-height:32px;padding-left:8px}.chips{border:none;border-bottom:1px solid #9e9e9e;box-shadow:none;margin:0 0 20px 0;min-height:45px;outline:none;transition:all .3s}.chips.focus{border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}.chips:hover{cursor:text}.chips .chip.selected{background-color:#26a69a;color:#fff}.chips .input{background:none;border:0;color:rgba(0,0,0,0.6);display:inline-block;font-size:1rem;height:3rem;line-height:32px;outline:0;margin:0;padding:0 !important;width:120px !important}.chips .input:focus{border:0 !important;box-shadow:none !important}.prefix ~ .chips{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.chips:empty ~ label{font-size:0.8rem;-webkit-transform:translateY(-140%);transform:translateY(-140%)}.materialboxed{display:block;cursor:-webkit-zoom-in;cursor:zoom-in;position:relative;transition:opacity .4s;-webkit-backface-visibility:hidden}.materialboxed:hover:not(.active){opacity:.8}.materialboxed.active{cursor:-webkit-zoom-out;cursor:zoom-out}#materialbox-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#292929;z-index:1000;will-change:opacity}.materialbox-caption{position:fixed;display:none;color:#fff;line-height:50px;bottom:0;left:0;width:100%;text-align:center;padding:0% 15%;height:50px;z-index:1000;-webkit-font-smoothing:antialiased}select:focus{outline:1px solid #c9f3ef}button:focus{outline:none;background-color:#2ab7a9}label{font-size:.8rem;color:#9e9e9e}::-webkit-input-placeholder{color:#d1d1d1}:-moz-placeholder{color:#d1d1d1}::-moz-placeholder{color:#d1d1d1}:-ms-input-placeholder{color:#d1d1d1}input:not([type]),input[type=text],input[type=password],input[type=email],input[type=url],input[type=time],input[type=date],input[type=datetime],input[type=datetime-local],input[type=tel],input[type=number],input[type=search],textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:3rem;width:100%;font-size:1rem;margin:0 0 20px 0;padding:0;box-shadow:none;box-sizing:content-box;transition:all 0.3s}input:not([type]):disabled,input:not([type])[readonly=\"readonly\"],input[type=text]:disabled,input[type=text][readonly=\"readonly\"],input[type=password]:disabled,input[type=password][readonly=\"readonly\"],input[type=email]:disabled,input[type=email][readonly=\"readonly\"],input[type=url]:disabled,input[type=url][readonly=\"readonly\"],input[type=time]:disabled,input[type=time][readonly=\"readonly\"],input[type=date]:disabled,input[type=date][readonly=\"readonly\"],input[type=datetime]:disabled,input[type=datetime][readonly=\"readonly\"],input[type=datetime-local]:disabled,input[type=datetime-local][readonly=\"readonly\"],input[type=tel]:disabled,input[type=tel][readonly=\"readonly\"],input[type=number]:disabled,input[type=number][readonly=\"readonly\"],input[type=search]:disabled,input[type=search][readonly=\"readonly\"],textarea.materialize-textarea:disabled,textarea.materialize-textarea[readonly=\"readonly\"]{color:rgba(0,0,0,0.26);border-bottom:1px dotted rgba(0,0,0,0.26)}input:not([type]):disabled+label,input:not([type])[readonly=\"readonly\"]+label,input[type=text]:disabled+label,input[type=text][readonly=\"readonly\"]+label,input[type=password]:disabled+label,input[type=password][readonly=\"readonly\"]+label,input[type=email]:disabled+label,input[type=email][readonly=\"readonly\"]+label,input[type=url]:disabled+label,input[type=url][readonly=\"readonly\"]+label,input[type=time]:disabled+label,input[type=time][readonly=\"readonly\"]+label,input[type=date]:disabled+label,input[type=date][readonly=\"readonly\"]+label,input[type=datetime]:disabled+label,input[type=datetime][readonly=\"readonly\"]+label,input[type=datetime-local]:disabled+label,input[type=datetime-local][readonly=\"readonly\"]+label,input[type=tel]:disabled+label,input[type=tel][readonly=\"readonly\"]+label,input[type=number]:disabled+label,input[type=number][readonly=\"readonly\"]+label,input[type=search]:disabled+label,input[type=search][readonly=\"readonly\"]+label,textarea.materialize-textarea:disabled+label,textarea.materialize-textarea[readonly=\"readonly\"]+label{color:rgba(0,0,0,0.26)}input:not([type]):focus:not([readonly]),input[type=text]:focus:not([readonly]),input[type=password]:focus:not([readonly]),input[type=email]:focus:not([readonly]),input[type=url]:focus:not([readonly]),input[type=time]:focus:not([readonly]),input[type=date]:focus:not([readonly]),input[type=datetime]:focus:not([readonly]),input[type=datetime-local]:focus:not([readonly]),input[type=tel]:focus:not([readonly]),input[type=number]:focus:not([readonly]),input[type=search]:focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}input:not([type]):focus:not([readonly])+label,input[type=text]:focus:not([readonly])+label,input[type=password]:focus:not([readonly])+label,input[type=email]:focus:not([readonly])+label,input[type=url]:focus:not([readonly])+label,input[type=time]:focus:not([readonly])+label,input[type=date]:focus:not([readonly])+label,input[type=datetime]:focus:not([readonly])+label,input[type=datetime-local]:focus:not([readonly])+label,input[type=tel]:focus:not([readonly])+label,input[type=number]:focus:not([readonly])+label,input[type=search]:focus:not([readonly])+label,textarea.materialize-textarea:focus:not([readonly])+label{color:#26a69a}input:not([type]).valid,input:not([type]):focus.valid,input[type=text].valid,input[type=text]:focus.valid,input[type=password].valid,input[type=password]:focus.valid,input[type=email].valid,input[type=email]:focus.valid,input[type=url].valid,input[type=url]:focus.valid,input[type=time].valid,input[type=time]:focus.valid,input[type=date].valid,input[type=date]:focus.valid,input[type=datetime].valid,input[type=datetime]:focus.valid,input[type=datetime-local].valid,input[type=datetime-local]:focus.valid,input[type=tel].valid,input[type=tel]:focus.valid,input[type=number].valid,input[type=number]:focus.valid,input[type=search].valid,input[type=search]:focus.valid,textarea.materialize-textarea.valid,textarea.materialize-textarea:focus.valid{border-bottom:1px solid #4CAF50;box-shadow:0 1px 0 0 #4CAF50}input:not([type]).valid+label:after,input:not([type]):focus.valid+label:after,input[type=text].valid+label:after,input[type=text]:focus.valid+label:after,input[type=password].valid+label:after,input[type=password]:focus.valid+label:after,input[type=email].valid+label:after,input[type=email]:focus.valid+label:after,input[type=url].valid+label:after,input[type=url]:focus.valid+label:after,input[type=time].valid+label:after,input[type=time]:focus.valid+label:after,input[type=date].valid+label:after,input[type=date]:focus.valid+label:after,input[type=datetime].valid+label:after,input[type=datetime]:focus.valid+label:after,input[type=datetime-local].valid+label:after,input[type=datetime-local]:focus.valid+label:after,input[type=tel].valid+label:after,input[type=tel]:focus.valid+label:after,input[type=number].valid+label:after,input[type=number]:focus.valid+label:after,input[type=search].valid+label:after,input[type=search]:focus.valid+label:after,textarea.materialize-textarea.valid+label:after,textarea.materialize-textarea:focus.valid+label:after{content:attr(data-success);color:#4CAF50;opacity:1}input:not([type]).invalid,input:not([type]):focus.invalid,input[type=text].invalid,input[type=text]:focus.invalid,input[type=password].invalid,input[type=password]:focus.invalid,input[type=email].invalid,input[type=email]:focus.invalid,input[type=url].invalid,input[type=url]:focus.invalid,input[type=time].invalid,input[type=time]:focus.invalid,input[type=date].invalid,input[type=date]:focus.invalid,input[type=datetime].invalid,input[type=datetime]:focus.invalid,input[type=datetime-local].invalid,input[type=datetime-local]:focus.invalid,input[type=tel].invalid,input[type=tel]:focus.invalid,input[type=number].invalid,input[type=number]:focus.invalid,input[type=search].invalid,input[type=search]:focus.invalid,textarea.materialize-textarea.invalid,textarea.materialize-textarea:focus.invalid{border-bottom:1px solid #F44336;box-shadow:0 1px 0 0 #F44336}input:not([type]).invalid+label:after,input:not([type]):focus.invalid+label:after,input[type=text].invalid+label:after,input[type=text]:focus.invalid+label:after,input[type=password].invalid+label:after,input[type=password]:focus.invalid+label:after,input[type=email].invalid+label:after,input[type=email]:focus.invalid+label:after,input[type=url].invalid+label:after,input[type=url]:focus.invalid+label:after,input[type=time].invalid+label:after,input[type=time]:focus.invalid+label:after,input[type=date].invalid+label:after,input[type=date]:focus.invalid+label:after,input[type=datetime].invalid+label:after,input[type=datetime]:focus.invalid+label:after,input[type=datetime-local].invalid+label:after,input[type=datetime-local]:focus.invalid+label:after,input[type=tel].invalid+label:after,input[type=tel]:focus.invalid+label:after,input[type=number].invalid+label:after,input[type=number]:focus.invalid+label:after,input[type=search].invalid+label:after,input[type=search]:focus.invalid+label:after,textarea.materialize-textarea.invalid+label:after,textarea.materialize-textarea:focus.invalid+label:after{content:attr(data-error);color:#F44336;opacity:1}input:not([type]).validate+label,input[type=text].validate+label,input[type=password].validate+label,input[type=email].validate+label,input[type=url].validate+label,input[type=time].validate+label,input[type=date].validate+label,input[type=datetime].validate+label,input[type=datetime-local].validate+label,input[type=tel].validate+label,input[type=number].validate+label,input[type=search].validate+label,textarea.materialize-textarea.validate+label{width:100%;pointer-events:none}input:not([type])+label:after,input[type=text]+label:after,input[type=password]+label:after,input[type=email]+label:after,input[type=url]+label:after,input[type=time]+label:after,input[type=date]+label:after,input[type=datetime]+label:after,input[type=datetime-local]+label:after,input[type=tel]+label:after,input[type=number]+label:after,input[type=search]+label:after,textarea.materialize-textarea+label:after{display:block;content:\"\";position:absolute;top:60px;opacity:0;transition:.2s opacity ease-out, .2s color ease-out}.input-field{position:relative;margin-top:1rem}.input-field.inline{display:inline-block;vertical-align:middle;margin-left:5px}.input-field.inline input,.input-field.inline .select-dropdown{margin-bottom:1rem}.input-field.col label{left:.75rem}.input-field.col .prefix ~ label,.input-field.col .prefix ~ .validate ~ label{width:calc(100% - 3rem - 1.5rem)}.input-field label{color:#9e9e9e;position:absolute;top:0.8rem;left:0;font-size:1rem;cursor:text;transition:.2s ease-out}.input-field label:not(.label-icon).active{font-size:.8rem;-webkit-transform:translateY(-140%);transform:translateY(-140%)}.input-field .prefix{position:absolute;width:3rem;font-size:2rem;transition:color .2s}.input-field .prefix.active{color:#26a69a}.input-field .prefix ~ input,.input-field .prefix ~ textarea,.input-field .prefix ~ label,.input-field .prefix ~ .validate ~ label,.input-field .prefix ~ .autocomplete-content{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.input-field .prefix ~ label{margin-left:3rem}@media only screen and (max-width: 992px){.input-field .prefix ~ input{width:86%;width:calc(100% - 3rem)}}@media only screen and (max-width: 600px){.input-field .prefix ~ input{width:80%;width:calc(100% - 3rem)}}.input-field input[type=search]{display:block;line-height:inherit;padding-left:4rem;width:calc(100% - 4rem)}.input-field input[type=search]:focus{background-color:#fff;border:0;box-shadow:none;color:#444}.input-field input[type=search]:focus+label i,.input-field input[type=search]:focus ~ .mdi-navigation-close,.input-field input[type=search]:focus ~ .material-icons{color:#444}.input-field input[type=search]+label{left:1rem}.input-field input[type=search] ~ .mdi-navigation-close,.input-field input[type=search] ~ .material-icons{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;transition:.3s color}textarea{width:100%;height:3rem;background-color:transparent}textarea.materialize-textarea{overflow-y:hidden;padding:.8rem 0 1.6rem 0;resize:none;min-height:3rem}.hiddendiv{display:none;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;padding-top:1.2rem}.autocomplete-content{margin-top:-15px;display:block;opacity:1;position:static}.autocomplete-content li .highlight{color:#444}.autocomplete-content li img{height:40px;width:40px;margin:5px 15px}[type=\"radio\"]:not(:checked),[type=\"radio\"]:checked{position:absolute;left:-9999px;opacity:0}[type=\"radio\"]:not(:checked)+label,[type=\"radio\"]:checked+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;transition:.28s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[type=\"radio\"]+label:before,[type=\"radio\"]+label:after{content:'';position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;transition:.28s ease}[type=\"radio\"]:not(:checked)+label:before,[type=\"radio\"]:not(:checked)+label:after,[type=\"radio\"]:checked+label:before,[type=\"radio\"]:checked+label:after,[type=\"radio\"].with-gap:checked+label:before,[type=\"radio\"].with-gap:checked+label:after{border-radius:50%}[type=\"radio\"]:not(:checked)+label:before,[type=\"radio\"]:not(:checked)+label:after{border:2px solid #5a5a5a}[type=\"radio\"]:not(:checked)+label:after{-webkit-transform:scale(0);transform:scale(0)}[type=\"radio\"]:checked+label:before{border:2px solid transparent}[type=\"radio\"]:checked+label:after,[type=\"radio\"].with-gap:checked+label:before,[type=\"radio\"].with-gap:checked+label:after{border:2px solid #26a69a}[type=\"radio\"]:checked+label:after,[type=\"radio\"].with-gap:checked+label:after{background-color:#26a69a}[type=\"radio\"]:checked+label:after{-webkit-transform:scale(1.02);transform:scale(1.02)}[type=\"radio\"].with-gap:checked+label:after{-webkit-transform:scale(0.5);transform:scale(0.5)}[type=\"radio\"].tabbed:focus+label:before{box-shadow:0 0 0 10px rgba(0,0,0,0.1)}[type=\"radio\"].with-gap:disabled:checked+label:before{border:2px solid rgba(0,0,0,0.26)}[type=\"radio\"].with-gap:disabled:checked+label:after{border:none;background-color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled:not(:checked)+label:before,[type=\"radio\"]:disabled:checked+label:before{background-color:transparent;border-color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled+label{color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled:not(:checked)+label:before{border-color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled:checked+label:after{background-color:rgba(0,0,0,0.26);border-color:#BDBDBD}form p{margin-bottom:10px;text-align:left}form p:last-child{margin-bottom:0}[type=\"checkbox\"]:not(:checked),[type=\"checkbox\"]:checked{position:absolute;left:-9999px;opacity:0}[type=\"checkbox\"]+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}[type=\"checkbox\"]+label:before,[type=\"checkbox\"]:not(.filled-in)+label:after{content:'';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:2px;transition:.2s}[type=\"checkbox\"]:not(.filled-in)+label:after{border:0;-webkit-transform:scale(0);transform:scale(0)}[type=\"checkbox\"]:not(:checked):disabled+label:before{border:none;background-color:rgba(0,0,0,0.26)}[type=\"checkbox\"].tabbed:focus+label:after{-webkit-transform:scale(1);transform:scale(1);border:0;border-radius:50%;box-shadow:0 0 0 10px rgba(0,0,0,0.1);background-color:rgba(0,0,0,0.1)}[type=\"checkbox\"]:checked+label:before{top:-4px;left:-5px;width:12px;height:22px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #26a69a;border-bottom:2px solid #26a69a;-webkit-transform:rotate(40deg);transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"]:checked:disabled+label:before{border-right:2px solid rgba(0,0,0,0.26);border-bottom:2px solid rgba(0,0,0,0.26)}[type=\"checkbox\"]:indeterminate+label:before{top:-11px;left:-12px;width:10px;height:22px;border-top:none;border-left:none;border-right:2px solid #26a69a;border-bottom:none;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"]:indeterminate:disabled+label:before{border-right:2px solid rgba(0,0,0,0.26);background-color:transparent}[type=\"checkbox\"].filled-in+label:after{border-radius:2px}[type=\"checkbox\"].filled-in+label:before,[type=\"checkbox\"].filled-in+label:after{content:'';left:0;position:absolute;transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;z-index:1}[type=\"checkbox\"].filled-in:not(:checked)+label:before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:20% 40%;transform-origin:100% 100%}[type=\"checkbox\"].filled-in:not(:checked)+label:after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0px;z-index:0}[type=\"checkbox\"].filled-in:checked+label:before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"].filled-in:checked+label:after{top:0;width:20px;height:20px;border:2px solid #26a69a;background-color:#26a69a;z-index:0}[type=\"checkbox\"].filled-in.tabbed:focus+label:after{border-radius:2px;border-color:#5a5a5a;background-color:rgba(0,0,0,0.1)}[type=\"checkbox\"].filled-in.tabbed:checked:focus+label:after{border-radius:2px;background-color:#26a69a;border-color:#26a69a}[type=\"checkbox\"].filled-in:disabled:not(:checked)+label:before{background-color:transparent;border:2px solid transparent}[type=\"checkbox\"].filled-in:disabled:not(:checked)+label:after{border-color:transparent;background-color:#BDBDBD}[type=\"checkbox\"].filled-in:disabled:checked+label:before{background-color:transparent}[type=\"checkbox\"].filled-in:disabled:checked+label:after{background-color:#BDBDBD;border-color:#BDBDBD}.switch,.switch *{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.switch label{cursor:pointer}.switch label input[type=checkbox]{opacity:0;width:0;height:0}.switch label input[type=checkbox]:checked+.lever{background-color:#84c7c1}.switch label input[type=checkbox]:checked+.lever:after{background-color:#26a69a;left:24px}.switch label .lever{content:\"\";display:inline-block;position:relative;width:40px;height:15px;background-color:#818181;border-radius:15px;margin-right:10px;transition:background 0.3s ease;vertical-align:middle;margin:0 16px}.switch label .lever:after{content:\"\";position:absolute;display:inline-block;width:21px;height:21px;background-color:#F1F1F1;border-radius:21px;box-shadow:0 1px 3px 1px rgba(0,0,0,0.4);left:-5px;top:-3px;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease}input[type=checkbox]:checked:not(:disabled) ~ .lever:active::after,input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::after{box-shadow:0 1px 3px 1px rgba(0,0,0,0.4),0 0 0 15px rgba(38,166,154,0.1)}input[type=checkbox]:not(:disabled) ~ .lever:active:after,input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::after{box-shadow:0 1px 3px 1px rgba(0,0,0,0.4),0 0 0 15px rgba(0,0,0,0.08)}.switch input[type=checkbox][disabled]+.lever{cursor:default}.switch label input[type=checkbox][disabled]+.lever:after,.switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#BDBDBD}select{display:none}select.browser-default{display:block}select{background-color:rgba(255,255,255,0.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;outline:none;height:3rem;line-height:3rem;width:100%;font-size:1rem;margin:0 0 20px 0;padding:0;display:block}.select-wrapper span.caret{color:initial;position:absolute;right:0;top:0;bottom:0;height:10px;margin:auto 0;font-size:10px;line-height:10px}.select-wrapper span.caret.disabled{color:rgba(0,0,0,0.26)}.select-wrapper+label{position:absolute;top:-14px;font-size:.8rem}select:disabled{color:rgba(0,0,0,0.3)}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,0.3);cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;border-bottom:1px solid rgba(0,0,0,0.3)}.select-wrapper i{color:rgba(0,0,0,0.3)}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,0.3);background-color:transparent}.prefix ~ .select-wrapper{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.prefix ~ label{margin-left:3rem}.select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,0.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,0.4)}.select-dropdown li.optgroup ~ li.optgroup-option{padding-left:1rem}.file-field{position:relative}.file-field .file-path-wrapper{overflow:hidden;padding-left:10px}.file-field input.file-path{width:100%}.file-field .btn,.file-field .btn-large{float:left;height:3rem;line-height:3rem}.file-field span{cursor:pointer}.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}.range-field{position:relative}input[type=range],input[type=range]+.thumb{cursor:pointer}input[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0;padding:0}input[type=range]:focus{outline:none}input[type=range]+.thumb{position:absolute;border:none;height:0;width:0;border-radius:50%;background-color:#26a69a;top:10px;margin-left:-6px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#26a69a;font-size:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}input[type=range]{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:14px;width:14px;border-radius:50%;background-color:#26a69a;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;margin:-5px 0 0 0;transition:.3s}input[type=range]:focus::-webkit-slider-runnable-track{background:#ccc}input[type=range]{border:1px solid white}input[type=range]::-moz-range-track{height:3px;background:#ddd;border:none}input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;margin-top:-5px}input[type=range]:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}input[type=range]:focus::-moz-range-track{background:#ccc}input[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#777}input[type=range]::-ms-fill-upper{background:#ddd}input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a}input[type=range]:focus::-ms-fill-lower{background:#888}input[type=range]:focus::-ms-fill-upper{background:#ccc}.table-of-contents.fixed{position:fixed}.table-of-contents li{padding:2px 0}.table-of-contents a{display:inline-block;font-weight:300;color:#757575;padding-left:20px;height:1.5rem;line-height:1.5rem;letter-spacing:.4;display:inline-block}.table-of-contents a:hover{color:#a8a8a8;padding-left:19px;border-left:1px solid #ee6e73}.table-of-contents a.active{font-weight:500;padding-left:18px;border-left:2px solid #ee6e73}.side-nav{position:fixed;width:300px;left:0;top:0;margin:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);height:100%;height:calc(100% + 60px);height:-moz-calc(100%);padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateX(-105%);transform:translateX(-105%)}.side-nav.right-aligned{right:0;-webkit-transform:translateX(105%);transform:translateX(105%);left:auto;-webkit-transform:translateX(100%);transform:translateX(100%)}.side-nav .collapsible{margin:0}.side-nav li{float:none;line-height:48px}.side-nav li.active{background-color:rgba(0,0,0,0.05)}.side-nav a{color:rgba(0,0,0,0.87);display:block;font-size:14px;font-weight:500;height:48px;line-height:48px;padding:0 32px}.side-nav a:hover{background-color:rgba(0,0,0,0.05)}.side-nav a.btn,.side-nav a.btn-large,.side-nav a.btn-large,.side-nav a.btn-flat,.side-nav a.btn-floating{margin:10px 15px}.side-nav a.btn,.side-nav a.btn-large,.side-nav a.btn-large,.side-nav a.btn-floating{color:#fff}.side-nav a.btn-flat{color:#343434}.side-nav a.btn:hover,.side-nav a.btn-large:hover,.side-nav a.btn-large:hover{background-color:#2bbbad}.side-nav a.btn-floating:hover{background-color:#26a69a}.side-nav li>a>i,.side-nav li>a>[class^=\"mdi-\"],.side-nav li>a>[class*=\"mdi-\"],.side-nav li>a>i.material-icons{float:left;height:48px;line-height:48px;margin:0 32px 0 0;width:24px;color:rgba(0,0,0,0.54)}.side-nav .divider{margin:8px 0 0 0}.side-nav .subheader{cursor:initial;pointer-events:none;color:rgba(0,0,0,0.54);font-size:14px;font-weight:500;line-height:48px}.side-nav .subheader:hover{background-color:transparent}.side-nav .userView{position:relative;padding:32px 32px 0;margin-bottom:8px}.side-nav .userView>a{height:auto;padding:0}.side-nav .userView>a:hover{background-color:transparent}.side-nav .userView .background{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.side-nav .userView .circle,.side-nav .userView .name,.side-nav .userView .email{display:block}.side-nav .userView .circle{height:64px;width:64px}.side-nav .userView .name,.side-nav .userView .email{font-size:14px;line-height:24px}.side-nav .userView .name{margin-top:16px;font-weight:500}.side-nav .userView .email{padding-bottom:16px;font-weight:400}.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}.side-nav.fixed{left:0;-webkit-transform:translateX(0);transform:translateX(0);position:fixed}.side-nav.fixed.right-aligned{right:0;left:auto}@media only screen and (max-width: 992px){.side-nav.fixed{-webkit-transform:translateX(-105%);transform:translateX(-105%)}.side-nav.fixed.right-aligned{-webkit-transform:translateX(105%);transform:translateX(105%)}.side-nav a{padding:0 16px}.side-nav .userView{padding:16px 16px 0}}.side-nav .collapsible-body>ul:not(.collapsible)>li.active,.side-nav.fixed .collapsible-body>ul:not(.collapsible)>li.active{background-color:#ee6e73}.side-nav .collapsible-body>ul:not(.collapsible)>li.active a,.side-nav.fixed .collapsible-body>ul:not(.collapsible)>li.active a{color:#fff}#sidenav-overlay{position:fixed;top:0;left:0;right:0;height:120vh;background-color:rgba(0,0,0,0.5);z-index:997;will-change:opacity}.preloader-wrapper{display:inline-block;position:relative;width:48px;height:48px}.preloader-wrapper.small{width:36px;height:36px}.preloader-wrapper.big{width:64px;height:64px}.preloader-wrapper.active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}@keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;border-color:#26a69a}.spinner-blue,.spinner-blue-only{border-color:#4285f4}.spinner-red,.spinner-red-only{border-color:#db4437}.spinner-yellow,.spinner-yellow-only{border-color:#f4b400}.spinner-green,.spinner-green-only{border-color:#0f9d58}.active .spinner-layer.spinner-blue{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-red{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-yellow{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-green{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer,.active .spinner-layer.spinner-blue-only,.active .spinner-layer.spinner-red-only,.active .spinner-layer.spinner-yellow-only,.active .spinner-layer.spinner-green-only{opacity:1;-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@-webkit-keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@-webkit-keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@-webkit-keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@-webkit-keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}.gap-patch{position:absolute;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.gap-patch .circle{width:1000%;left:-450%}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.circle-clipper .circle{width:200%;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent !important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}.circle-clipper.left .circle{left:0;border-right-color:transparent !important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.circle-clipper.right .circle{left:-100%;border-left-color:transparent !important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.active .circle-clipper.left .circle{-webkit-animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .circle-clipper.right .circle{-webkit-animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes left-spin{from{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{from{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@-webkit-keyframes right-spin{from{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{from{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}#spinnerContainer.cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1)}@-webkit-keyframes fade-out{from{opacity:1}to{opacity:0}}@keyframes fade-out{from{opacity:1}to{opacity:0}}.slider{position:relative;height:400px;width:100%}.slider.fullscreen{height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0}.slider.fullscreen ul.slides{height:100%}.slider.fullscreen ul.indicators{z-index:2;bottom:30px}.slider .slides{background-color:#9e9e9e;margin:0;height:400px}.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:center}.slider .slides li .caption{color:#fff;position:absolute;top:15%;left:15%;width:70%;opacity:0}.slider .slides li .caption p{color:#e0e0e0}.slider .slides li.active{z-index:2}.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:16px;width:16px;margin:0 12px;background-color:#e0e0e0;transition:background-color .3s;border-radius:50%}.slider .indicators .indicator-item.active{background-color:#4CAF50}.carousel{overflow:hidden;position:relative;width:100%;height:400px;-webkit-perspective:500px;perspective:500px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:0% 50%;transform-origin:0% 50%}.carousel.carousel-slider{top:0;left:0;height:0}.carousel.carousel-slider .carousel-fixed-item{position:absolute;left:0;right:0;bottom:20px;z-index:1}.carousel.carousel-slider .carousel-fixed-item.with-indicators{bottom:68px}.carousel.carousel-slider .carousel-item{width:100%;height:100%;min-height:400px;position:absolute;top:0;left:0}.carousel.carousel-slider .carousel-item h2{font-size:24px;font-weight:500;line-height:32px}.carousel.carousel-slider .carousel-item p{font-size:15px}.carousel .carousel-item{display:none;width:200px;height:200px;position:absolute;top:0;left:0}.carousel .carousel-item img{width:100%}.carousel .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.carousel .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:8px;width:8px;margin:24px 4px;background-color:rgba(255,255,255,0.5);transition:background-color .3s;border-radius:50%}.carousel .indicators .indicator-item.active{background-color:#fff}.picker{font-size:16px;text-align:left;line-height:1.2;color:#000000;position:absolute;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker__input{cursor:default}.picker__input.picker__input--active{border-color:#0089ec}.picker__holder{width:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}/*!\n * Default mobile-first, responsive styling for pickadate.js\n * Demo: http://amsul.github.io/pickadate.js\n */.picker__holder,.picker__frame{bottom:0;left:0;right:0;top:100%}.picker__holder{position:fixed;transition:background 0.15s ease-out, top 0s 0.15s;-webkit-backface-visibility:hidden}.picker__frame{position:absolute;margin:0 auto;min-width:256px;width:300px;max-height:350px;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0);-moz-opacity:0;opacity:0;transition:all 0.15s ease-out}@media (min-height: 28.875em){.picker__frame{overflow:visible;top:auto;bottom:-100%;max-height:80%}}@media (min-height: 40.125em){.picker__frame{margin-bottom:7.5%}}.picker__wrap{display:table;width:100%;height:100%}@media (min-height: 28.875em){.picker__wrap{display:block}}.picker__box{background:#ffffff;display:table-cell;vertical-align:middle}@media (min-height: 28.875em){.picker__box{display:block;border:1px solid #777777;border-top-color:#898989;border-bottom-width:0;border-radius:5px 5px 0 0;box-shadow:0 12px 36px 16px rgba(0,0,0,0.24)}}.picker--opened .picker__holder{top:0;background:transparent;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)\";zoom:1;background:rgba(0,0,0,0.32);transition:background 0.15s ease-out}.picker--opened .picker__frame{top:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";filter:alpha(opacity=100);-moz-opacity:1;opacity:1}@media (min-height: 35.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.picker__input.picker__input--active{border-color:#E3F2FD}.picker__frame{margin:0 auto;max-width:325px}@media (min-height: 38.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.picker__box{padding:0 1em}.picker__header{text-align:center;position:relative;margin-top:.75em}.picker__month,.picker__year{display:inline-block;margin-left:.25em;margin-right:.25em}.picker__select--month,.picker__select--year{height:2em;padding:0;margin-left:.25em;margin-right:.25em}.picker__select--month.browser-default{display:inline;background-color:#FFFFFF;width:40%}.picker__select--year.browser-default{display:inline;background-color:#FFFFFF;width:26%}.picker__select--month:focus,.picker__select--year:focus{border-color:rgba(0,0,0,0.05)}.picker__nav--prev,.picker__nav--next{position:absolute;padding:.5em 1.25em;width:1em;height:1em;box-sizing:content-box;top:-0.25em}.picker__nav--prev{left:-1em;padding-right:1.25em}.picker__nav--next{right:-1em;padding-left:1.25em}.picker__nav--disabled,.picker__nav--disabled:hover,.picker__nav--disabled:before,.picker__nav--disabled:before:hover{cursor:default;background:none;border-right-color:#f5f5f5;border-left-color:#f5f5f5}.picker__table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:1rem;width:100%;margin-top:.75em;margin-bottom:.5em}.picker__table th,.picker__table td{text-align:center}.picker__table td{margin:0;padding:0}.picker__weekday{width:14.285714286%;font-size:.75em;padding-bottom:.25em;color:#999999;font-weight:500}@media (min-height: 33.875em){.picker__weekday{padding-bottom:.5em}}.picker__day--today{position:relative;color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__day--disabled:before{border-top-color:#aaaaaa}.picker__day--infocus:hover{cursor:pointer;color:#000;font-weight:500}.picker__day--outfocus{display:none;padding:.75rem 0;color:#fff}.picker__day--outfocus:hover{cursor:pointer;color:#dddddd;font-weight:500}.picker__day--highlighted:hover,.picker--focused .picker__day--highlighted{cursor:pointer}.picker__day--selected,.picker__day--selected:hover,.picker--focused .picker__day--selected{border-radius:50%;-webkit-transform:scale(0.75);transform:scale(0.75);background:#0089ec;color:#ffffff}.picker__day--disabled,.picker__day--disabled:hover,.picker--focused .picker__day--disabled{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default}.picker__day--highlighted.picker__day--disabled,.picker__day--highlighted.picker__day--disabled:hover{background:#bbbbbb}.picker__footer{text-align:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.picker__button--today,.picker__button--clear,.picker__button--close{border:1px solid #ffffff;background:#ffffff;font-size:.8em;padding:.66em 0;font-weight:bold;width:33%;display:inline-block;vertical-align:bottom}.picker__button--today:hover,.picker__button--clear:hover,.picker__button--close:hover{cursor:pointer;color:#000000;background:#b1dcfb;border-bottom-color:#b1dcfb}.picker__button--today:focus,.picker__button--clear:focus,.picker__button--close:focus{background:#b1dcfb;border-color:rgba(0,0,0,0.05);outline:none}.picker__button--today:before,.picker__button--clear:before,.picker__button--close:before{position:relative;display:inline-block;height:0}.picker__button--today:before,.picker__button--clear:before{content:\" \";margin-right:.45em}.picker__button--today:before{top:-0.05em;width:0;border-top:0.66em solid #0059bc;border-left:.66em solid transparent}.picker__button--clear:before{top:-0.25em;width:.66em;border-top:3px solid #ee2200}.picker__button--close:before{content:\"\\D7\";top:-0.1em;vertical-align:top;font-size:1.1em;margin-right:.35em;color:#777777}.picker__button--today[disabled],.picker__button--today[disabled]:hover{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default}.picker__button--today[disabled]:before{border-top-color:#aaaaaa}.picker__box{border-radius:2px;overflow:hidden}.picker__date-display{text-align:center;background-color:#26a69a;color:#fff;padding-bottom:15px;font-weight:300}.picker__nav--prev:hover,.picker__nav--next:hover{cursor:pointer;color:#000000;background:#a1ded8}.picker__weekday-display{background-color:#1f897f;padding:10px;font-weight:200;letter-spacing:.5;font-size:1rem;margin-bottom:15px}.picker__month-display{text-transform:uppercase;font-size:2rem}.picker__day-display{font-size:4.5rem;font-weight:400}.picker__year-display{font-size:1.8rem;color:rgba(255,255,255,0.4)}.picker__box{padding:0}.picker__calendar-container{padding:0 1rem}.picker__calendar-container thead{border:none}.picker__table{margin-top:0;margin-bottom:.5em}.picker__day--infocus{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__day.picker__day--today{color:#26a69a}.picker__day.picker__day--today.picker__day--selected{color:#fff}.picker__weekday{font-size:.9rem}.picker__day--selected,.picker__day--selected:hover,.picker--focused .picker__day--selected{border-radius:50%;-webkit-transform:scale(0.9);transform:scale(0.9);background-color:#26a69a;color:#ffffff}.picker__day--selected.picker__day--outfocus,.picker__day--selected:hover.picker__day--outfocus,.picker--focused .picker__day--selected.picker__day--outfocus{background-color:#a1ded8}.picker__footer{text-align:right;padding:5px 10px}.picker__close,.picker__today{font-size:1.1rem;padding:0 1rem;color:#26a69a}.picker__nav--prev:before,.picker__nav--next:before{content:\" \";border-top:.5em solid transparent;border-bottom:.5em solid transparent;border-right:0.75em solid #676767;width:0;height:0;display:block;margin:0 auto}.picker__nav--next:before{border-right:0;border-left:0.75em solid #676767}button.picker__today:focus,button.picker__clear:focus,button.picker__close:focus{background-color:#a1ded8}.picker__list{list-style:none;padding:0.75em 0 4.2em;margin:0}.picker__list-item{border-bottom:1px solid #dddddd;border-top:1px solid #dddddd;margin-bottom:-1px;position:relative;background:#ffffff;padding:.75em 1.25em}@media (min-height: 46.75em){.picker__list-item{padding:.5em 1em}}.picker__list-item:hover{cursor:pointer;color:#000000;background:#b1dcfb;border-color:#0089ec;z-index:10}.picker__list-item--highlighted{border-color:#0089ec;z-index:10}.picker__list-item--highlighted:hover,.picker--focused .picker__list-item--highlighted{cursor:pointer;color:#000000;background:#b1dcfb}.picker__list-item--selected,.picker__list-item--selected:hover,.picker--focused .picker__list-item--selected{background:#0089ec;color:#ffffff;z-index:10}.picker__list-item--disabled,.picker__list-item--disabled:hover,.picker--focused .picker__list-item--disabled{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default;border-color:#dddddd;z-index:auto}.picker--time .picker__button--clear{display:block;width:80%;margin:1em auto 0;padding:1em 1.25em;background:none;border:0;font-weight:500;font-size:.67em;text-align:center;text-transform:uppercase;color:#666}.picker--time .picker__button--clear:hover,.picker--time .picker__button--clear:focus{color:#000000;background:#b1dcfb;background:#ee2200;border-color:#ee2200;cursor:pointer;color:#ffffff;outline:none}.picker--time .picker__button--clear:before{top:-0.25em;color:#666;font-size:1.25em;font-weight:bold}.picker--time .picker__button--clear:hover:before,.picker--time .picker__button--clear:focus:before{color:#ffffff}.picker--time .picker__frame{min-width:256px;max-width:320px}.picker--time .picker__box{font-size:1em;background:#f2f2f2;padding:0}@media (min-height: 40.125em){.picker--time .picker__box{margin-bottom:5em}}\n","/*!\n * Materialize v0.98.0 (http://materializecss.com)\n * Copyright 2014-2015 Materialize\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\n */\n.materialize-red {\n  background-color: #e51c23 !important; }\n\n.materialize-red-text {\n  color: #e51c23 !important; }\n\n.materialize-red.lighten-5 {\n  background-color: #fdeaeb !important; }\n\n.materialize-red-text.text-lighten-5 {\n  color: #fdeaeb !important; }\n\n.materialize-red.lighten-4 {\n  background-color: #f8c1c3 !important; }\n\n.materialize-red-text.text-lighten-4 {\n  color: #f8c1c3 !important; }\n\n.materialize-red.lighten-3 {\n  background-color: #f3989b !important; }\n\n.materialize-red-text.text-lighten-3 {\n  color: #f3989b !important; }\n\n.materialize-red.lighten-2 {\n  background-color: #ee6e73 !important; }\n\n.materialize-red-text.text-lighten-2 {\n  color: #ee6e73 !important; }\n\n.materialize-red.lighten-1 {\n  background-color: #ea454b !important; }\n\n.materialize-red-text.text-lighten-1 {\n  color: #ea454b !important; }\n\n.materialize-red.darken-1 {\n  background-color: #d0181e !important; }\n\n.materialize-red-text.text-darken-1 {\n  color: #d0181e !important; }\n\n.materialize-red.darken-2 {\n  background-color: #b9151b !important; }\n\n.materialize-red-text.text-darken-2 {\n  color: #b9151b !important; }\n\n.materialize-red.darken-3 {\n  background-color: #a21318 !important; }\n\n.materialize-red-text.text-darken-3 {\n  color: #a21318 !important; }\n\n.materialize-red.darken-4 {\n  background-color: #8b1014 !important; }\n\n.materialize-red-text.text-darken-4 {\n  color: #8b1014 !important; }\n\n.red {\n  background-color: #F44336 !important; }\n\n.red-text {\n  color: #F44336 !important; }\n\n.red.lighten-5 {\n  background-color: #FFEBEE !important; }\n\n.red-text.text-lighten-5 {\n  color: #FFEBEE !important; }\n\n.red.lighten-4 {\n  background-color: #FFCDD2 !important; }\n\n.red-text.text-lighten-4 {\n  color: #FFCDD2 !important; }\n\n.red.lighten-3 {\n  background-color: #EF9A9A !important; }\n\n.red-text.text-lighten-3 {\n  color: #EF9A9A !important; }\n\n.red.lighten-2 {\n  background-color: #E57373 !important; }\n\n.red-text.text-lighten-2 {\n  color: #E57373 !important; }\n\n.red.lighten-1 {\n  background-color: #EF5350 !important; }\n\n.red-text.text-lighten-1 {\n  color: #EF5350 !important; }\n\n.red.darken-1 {\n  background-color: #E53935 !important; }\n\n.red-text.text-darken-1 {\n  color: #E53935 !important; }\n\n.red.darken-2 {\n  background-color: #D32F2F !important; }\n\n.red-text.text-darken-2 {\n  color: #D32F2F !important; }\n\n.red.darken-3 {\n  background-color: #C62828 !important; }\n\n.red-text.text-darken-3 {\n  color: #C62828 !important; }\n\n.red.darken-4 {\n  background-color: #B71C1C !important; }\n\n.red-text.text-darken-4 {\n  color: #B71C1C !important; }\n\n.red.accent-1 {\n  background-color: #FF8A80 !important; }\n\n.red-text.text-accent-1 {\n  color: #FF8A80 !important; }\n\n.red.accent-2 {\n  background-color: #FF5252 !important; }\n\n.red-text.text-accent-2 {\n  color: #FF5252 !important; }\n\n.red.accent-3 {\n  background-color: #FF1744 !important; }\n\n.red-text.text-accent-3 {\n  color: #FF1744 !important; }\n\n.red.accent-4 {\n  background-color: #D50000 !important; }\n\n.red-text.text-accent-4 {\n  color: #D50000 !important; }\n\n.pink {\n  background-color: #e91e63 !important; }\n\n.pink-text {\n  color: #e91e63 !important; }\n\n.pink.lighten-5 {\n  background-color: #fce4ec !important; }\n\n.pink-text.text-lighten-5 {\n  color: #fce4ec !important; }\n\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important; }\n\n.pink-text.text-lighten-4 {\n  color: #f8bbd0 !important; }\n\n.pink.lighten-3 {\n  background-color: #f48fb1 !important; }\n\n.pink-text.text-lighten-3 {\n  color: #f48fb1 !important; }\n\n.pink.lighten-2 {\n  background-color: #f06292 !important; }\n\n.pink-text.text-lighten-2 {\n  color: #f06292 !important; }\n\n.pink.lighten-1 {\n  background-color: #ec407a !important; }\n\n.pink-text.text-lighten-1 {\n  color: #ec407a !important; }\n\n.pink.darken-1 {\n  background-color: #d81b60 !important; }\n\n.pink-text.text-darken-1 {\n  color: #d81b60 !important; }\n\n.pink.darken-2 {\n  background-color: #c2185b !important; }\n\n.pink-text.text-darken-2 {\n  color: #c2185b !important; }\n\n.pink.darken-3 {\n  background-color: #ad1457 !important; }\n\n.pink-text.text-darken-3 {\n  color: #ad1457 !important; }\n\n.pink.darken-4 {\n  background-color: #880e4f !important; }\n\n.pink-text.text-darken-4 {\n  color: #880e4f !important; }\n\n.pink.accent-1 {\n  background-color: #ff80ab !important; }\n\n.pink-text.text-accent-1 {\n  color: #ff80ab !important; }\n\n.pink.accent-2 {\n  background-color: #ff4081 !important; }\n\n.pink-text.text-accent-2 {\n  color: #ff4081 !important; }\n\n.pink.accent-3 {\n  background-color: #f50057 !important; }\n\n.pink-text.text-accent-3 {\n  color: #f50057 !important; }\n\n.pink.accent-4 {\n  background-color: #c51162 !important; }\n\n.pink-text.text-accent-4 {\n  color: #c51162 !important; }\n\n.purple {\n  background-color: #9c27b0 !important; }\n\n.purple-text {\n  color: #9c27b0 !important; }\n\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important; }\n\n.purple-text.text-lighten-5 {\n  color: #f3e5f5 !important; }\n\n.purple.lighten-4 {\n  background-color: #e1bee7 !important; }\n\n.purple-text.text-lighten-4 {\n  color: #e1bee7 !important; }\n\n.purple.lighten-3 {\n  background-color: #ce93d8 !important; }\n\n.purple-text.text-lighten-3 {\n  color: #ce93d8 !important; }\n\n.purple.lighten-2 {\n  background-color: #ba68c8 !important; }\n\n.purple-text.text-lighten-2 {\n  color: #ba68c8 !important; }\n\n.purple.lighten-1 {\n  background-color: #ab47bc !important; }\n\n.purple-text.text-lighten-1 {\n  color: #ab47bc !important; }\n\n.purple.darken-1 {\n  background-color: #8e24aa !important; }\n\n.purple-text.text-darken-1 {\n  color: #8e24aa !important; }\n\n.purple.darken-2 {\n  background-color: #7b1fa2 !important; }\n\n.purple-text.text-darken-2 {\n  color: #7b1fa2 !important; }\n\n.purple.darken-3 {\n  background-color: #6a1b9a !important; }\n\n.purple-text.text-darken-3 {\n  color: #6a1b9a !important; }\n\n.purple.darken-4 {\n  background-color: #4a148c !important; }\n\n.purple-text.text-darken-4 {\n  color: #4a148c !important; }\n\n.purple.accent-1 {\n  background-color: #ea80fc !important; }\n\n.purple-text.text-accent-1 {\n  color: #ea80fc !important; }\n\n.purple.accent-2 {\n  background-color: #e040fb !important; }\n\n.purple-text.text-accent-2 {\n  color: #e040fb !important; }\n\n.purple.accent-3 {\n  background-color: #d500f9 !important; }\n\n.purple-text.text-accent-3 {\n  color: #d500f9 !important; }\n\n.purple.accent-4 {\n  background-color: #a0f !important; }\n\n.purple-text.text-accent-4 {\n  color: #a0f !important; }\n\n.deep-purple {\n  background-color: #673ab7 !important; }\n\n.deep-purple-text {\n  color: #673ab7 !important; }\n\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important; }\n\n.deep-purple-text.text-lighten-5 {\n  color: #ede7f6 !important; }\n\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important; }\n\n.deep-purple-text.text-lighten-4 {\n  color: #d1c4e9 !important; }\n\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important; }\n\n.deep-purple-text.text-lighten-3 {\n  color: #b39ddb !important; }\n\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important; }\n\n.deep-purple-text.text-lighten-2 {\n  color: #9575cd !important; }\n\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important; }\n\n.deep-purple-text.text-lighten-1 {\n  color: #7e57c2 !important; }\n\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important; }\n\n.deep-purple-text.text-darken-1 {\n  color: #5e35b1 !important; }\n\n.deep-purple.darken-2 {\n  background-color: #512da8 !important; }\n\n.deep-purple-text.text-darken-2 {\n  color: #512da8 !important; }\n\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important; }\n\n.deep-purple-text.text-darken-3 {\n  color: #4527a0 !important; }\n\n.deep-purple.darken-4 {\n  background-color: #311b92 !important; }\n\n.deep-purple-text.text-darken-4 {\n  color: #311b92 !important; }\n\n.deep-purple.accent-1 {\n  background-color: #b388ff !important; }\n\n.deep-purple-text.text-accent-1 {\n  color: #b388ff !important; }\n\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important; }\n\n.deep-purple-text.text-accent-2 {\n  color: #7c4dff !important; }\n\n.deep-purple.accent-3 {\n  background-color: #651fff !important; }\n\n.deep-purple-text.text-accent-3 {\n  color: #651fff !important; }\n\n.deep-purple.accent-4 {\n  background-color: #6200ea !important; }\n\n.deep-purple-text.text-accent-4 {\n  color: #6200ea !important; }\n\n.indigo {\n  background-color: #3f51b5 !important; }\n\n.indigo-text {\n  color: #3f51b5 !important; }\n\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important; }\n\n.indigo-text.text-lighten-5 {\n  color: #e8eaf6 !important; }\n\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important; }\n\n.indigo-text.text-lighten-4 {\n  color: #c5cae9 !important; }\n\n.indigo.lighten-3 {\n  background-color: #9fa8da !important; }\n\n.indigo-text.text-lighten-3 {\n  color: #9fa8da !important; }\n\n.indigo.lighten-2 {\n  background-color: #7986cb !important; }\n\n.indigo-text.text-lighten-2 {\n  color: #7986cb !important; }\n\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important; }\n\n.indigo-text.text-lighten-1 {\n  color: #5c6bc0 !important; }\n\n.indigo.darken-1 {\n  background-color: #3949ab !important; }\n\n.indigo-text.text-darken-1 {\n  color: #3949ab !important; }\n\n.indigo.darken-2 {\n  background-color: #303f9f !important; }\n\n.indigo-text.text-darken-2 {\n  color: #303f9f !important; }\n\n.indigo.darken-3 {\n  background-color: #283593 !important; }\n\n.indigo-text.text-darken-3 {\n  color: #283593 !important; }\n\n.indigo.darken-4 {\n  background-color: #1a237e !important; }\n\n.indigo-text.text-darken-4 {\n  color: #1a237e !important; }\n\n.indigo.accent-1 {\n  background-color: #8c9eff !important; }\n\n.indigo-text.text-accent-1 {\n  color: #8c9eff !important; }\n\n.indigo.accent-2 {\n  background-color: #536dfe !important; }\n\n.indigo-text.text-accent-2 {\n  color: #536dfe !important; }\n\n.indigo.accent-3 {\n  background-color: #3d5afe !important; }\n\n.indigo-text.text-accent-3 {\n  color: #3d5afe !important; }\n\n.indigo.accent-4 {\n  background-color: #304ffe !important; }\n\n.indigo-text.text-accent-4 {\n  color: #304ffe !important; }\n\n.blue {\n  background-color: #2196F3 !important; }\n\n.blue-text {\n  color: #2196F3 !important; }\n\n.blue.lighten-5 {\n  background-color: #E3F2FD !important; }\n\n.blue-text.text-lighten-5 {\n  color: #E3F2FD !important; }\n\n.blue.lighten-4 {\n  background-color: #BBDEFB !important; }\n\n.blue-text.text-lighten-4 {\n  color: #BBDEFB !important; }\n\n.blue.lighten-3 {\n  background-color: #90CAF9 !important; }\n\n.blue-text.text-lighten-3 {\n  color: #90CAF9 !important; }\n\n.blue.lighten-2 {\n  background-color: #64B5F6 !important; }\n\n.blue-text.text-lighten-2 {\n  color: #64B5F6 !important; }\n\n.blue.lighten-1 {\n  background-color: #42A5F5 !important; }\n\n.blue-text.text-lighten-1 {\n  color: #42A5F5 !important; }\n\n.blue.darken-1 {\n  background-color: #1E88E5 !important; }\n\n.blue-text.text-darken-1 {\n  color: #1E88E5 !important; }\n\n.blue.darken-2 {\n  background-color: #1976D2 !important; }\n\n.blue-text.text-darken-2 {\n  color: #1976D2 !important; }\n\n.blue.darken-3 {\n  background-color: #1565C0 !important; }\n\n.blue-text.text-darken-3 {\n  color: #1565C0 !important; }\n\n.blue.darken-4 {\n  background-color: #0D47A1 !important; }\n\n.blue-text.text-darken-4 {\n  color: #0D47A1 !important; }\n\n.blue.accent-1 {\n  background-color: #82B1FF !important; }\n\n.blue-text.text-accent-1 {\n  color: #82B1FF !important; }\n\n.blue.accent-2 {\n  background-color: #448AFF !important; }\n\n.blue-text.text-accent-2 {\n  color: #448AFF !important; }\n\n.blue.accent-3 {\n  background-color: #2979FF !important; }\n\n.blue-text.text-accent-3 {\n  color: #2979FF !important; }\n\n.blue.accent-4 {\n  background-color: #2962FF !important; }\n\n.blue-text.text-accent-4 {\n  color: #2962FF !important; }\n\n.light-blue {\n  background-color: #03a9f4 !important; }\n\n.light-blue-text {\n  color: #03a9f4 !important; }\n\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important; }\n\n.light-blue-text.text-lighten-5 {\n  color: #e1f5fe !important; }\n\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important; }\n\n.light-blue-text.text-lighten-4 {\n  color: #b3e5fc !important; }\n\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important; }\n\n.light-blue-text.text-lighten-3 {\n  color: #81d4fa !important; }\n\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important; }\n\n.light-blue-text.text-lighten-2 {\n  color: #4fc3f7 !important; }\n\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important; }\n\n.light-blue-text.text-lighten-1 {\n  color: #29b6f6 !important; }\n\n.light-blue.darken-1 {\n  background-color: #039be5 !important; }\n\n.light-blue-text.text-darken-1 {\n  color: #039be5 !important; }\n\n.light-blue.darken-2 {\n  background-color: #0288d1 !important; }\n\n.light-blue-text.text-darken-2 {\n  color: #0288d1 !important; }\n\n.light-blue.darken-3 {\n  background-color: #0277bd !important; }\n\n.light-blue-text.text-darken-3 {\n  color: #0277bd !important; }\n\n.light-blue.darken-4 {\n  background-color: #01579b !important; }\n\n.light-blue-text.text-darken-4 {\n  color: #01579b !important; }\n\n.light-blue.accent-1 {\n  background-color: #80d8ff !important; }\n\n.light-blue-text.text-accent-1 {\n  color: #80d8ff !important; }\n\n.light-blue.accent-2 {\n  background-color: #40c4ff !important; }\n\n.light-blue-text.text-accent-2 {\n  color: #40c4ff !important; }\n\n.light-blue.accent-3 {\n  background-color: #00b0ff !important; }\n\n.light-blue-text.text-accent-3 {\n  color: #00b0ff !important; }\n\n.light-blue.accent-4 {\n  background-color: #0091ea !important; }\n\n.light-blue-text.text-accent-4 {\n  color: #0091ea !important; }\n\n.cyan {\n  background-color: #00bcd4 !important; }\n\n.cyan-text {\n  color: #00bcd4 !important; }\n\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important; }\n\n.cyan-text.text-lighten-5 {\n  color: #e0f7fa !important; }\n\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important; }\n\n.cyan-text.text-lighten-4 {\n  color: #b2ebf2 !important; }\n\n.cyan.lighten-3 {\n  background-color: #80deea !important; }\n\n.cyan-text.text-lighten-3 {\n  color: #80deea !important; }\n\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important; }\n\n.cyan-text.text-lighten-2 {\n  color: #4dd0e1 !important; }\n\n.cyan.lighten-1 {\n  background-color: #26c6da !important; }\n\n.cyan-text.text-lighten-1 {\n  color: #26c6da !important; }\n\n.cyan.darken-1 {\n  background-color: #00acc1 !important; }\n\n.cyan-text.text-darken-1 {\n  color: #00acc1 !important; }\n\n.cyan.darken-2 {\n  background-color: #0097a7 !important; }\n\n.cyan-text.text-darken-2 {\n  color: #0097a7 !important; }\n\n.cyan.darken-3 {\n  background-color: #00838f !important; }\n\n.cyan-text.text-darken-3 {\n  color: #00838f !important; }\n\n.cyan.darken-4 {\n  background-color: #006064 !important; }\n\n.cyan-text.text-darken-4 {\n  color: #006064 !important; }\n\n.cyan.accent-1 {\n  background-color: #84ffff !important; }\n\n.cyan-text.text-accent-1 {\n  color: #84ffff !important; }\n\n.cyan.accent-2 {\n  background-color: #18ffff !important; }\n\n.cyan-text.text-accent-2 {\n  color: #18ffff !important; }\n\n.cyan.accent-3 {\n  background-color: #00e5ff !important; }\n\n.cyan-text.text-accent-3 {\n  color: #00e5ff !important; }\n\n.cyan.accent-4 {\n  background-color: #00b8d4 !important; }\n\n.cyan-text.text-accent-4 {\n  color: #00b8d4 !important; }\n\n.teal {\n  background-color: #009688 !important; }\n\n.teal-text {\n  color: #009688 !important; }\n\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important; }\n\n.teal-text.text-lighten-5 {\n  color: #e0f2f1 !important; }\n\n.teal.lighten-4 {\n  background-color: #b2dfdb !important; }\n\n.teal-text.text-lighten-4 {\n  color: #b2dfdb !important; }\n\n.teal.lighten-3 {\n  background-color: #80cbc4 !important; }\n\n.teal-text.text-lighten-3 {\n  color: #80cbc4 !important; }\n\n.teal.lighten-2 {\n  background-color: #4db6ac !important; }\n\n.teal-text.text-lighten-2 {\n  color: #4db6ac !important; }\n\n.teal.lighten-1 {\n  background-color: #26a69a !important; }\n\n.teal-text.text-lighten-1 {\n  color: #26a69a !important; }\n\n.teal.darken-1 {\n  background-color: #00897b !important; }\n\n.teal-text.text-darken-1 {\n  color: #00897b !important; }\n\n.teal.darken-2 {\n  background-color: #00796b !important; }\n\n.teal-text.text-darken-2 {\n  color: #00796b !important; }\n\n.teal.darken-3 {\n  background-color: #00695c !important; }\n\n.teal-text.text-darken-3 {\n  color: #00695c !important; }\n\n.teal.darken-4 {\n  background-color: #004d40 !important; }\n\n.teal-text.text-darken-4 {\n  color: #004d40 !important; }\n\n.teal.accent-1 {\n  background-color: #a7ffeb !important; }\n\n.teal-text.text-accent-1 {\n  color: #a7ffeb !important; }\n\n.teal.accent-2 {\n  background-color: #64ffda !important; }\n\n.teal-text.text-accent-2 {\n  color: #64ffda !important; }\n\n.teal.accent-3 {\n  background-color: #1de9b6 !important; }\n\n.teal-text.text-accent-3 {\n  color: #1de9b6 !important; }\n\n.teal.accent-4 {\n  background-color: #00bfa5 !important; }\n\n.teal-text.text-accent-4 {\n  color: #00bfa5 !important; }\n\n.green {\n  background-color: #4CAF50 !important; }\n\n.green-text {\n  color: #4CAF50 !important; }\n\n.green.lighten-5 {\n  background-color: #E8F5E9 !important; }\n\n.green-text.text-lighten-5 {\n  color: #E8F5E9 !important; }\n\n.green.lighten-4 {\n  background-color: #C8E6C9 !important; }\n\n.green-text.text-lighten-4 {\n  color: #C8E6C9 !important; }\n\n.green.lighten-3 {\n  background-color: #A5D6A7 !important; }\n\n.green-text.text-lighten-3 {\n  color: #A5D6A7 !important; }\n\n.green.lighten-2 {\n  background-color: #81C784 !important; }\n\n.green-text.text-lighten-2 {\n  color: #81C784 !important; }\n\n.green.lighten-1 {\n  background-color: #66BB6A !important; }\n\n.green-text.text-lighten-1 {\n  color: #66BB6A !important; }\n\n.green.darken-1 {\n  background-color: #43A047 !important; }\n\n.green-text.text-darken-1 {\n  color: #43A047 !important; }\n\n.green.darken-2 {\n  background-color: #388E3C !important; }\n\n.green-text.text-darken-2 {\n  color: #388E3C !important; }\n\n.green.darken-3 {\n  background-color: #2E7D32 !important; }\n\n.green-text.text-darken-3 {\n  color: #2E7D32 !important; }\n\n.green.darken-4 {\n  background-color: #1B5E20 !important; }\n\n.green-text.text-darken-4 {\n  color: #1B5E20 !important; }\n\n.green.accent-1 {\n  background-color: #B9F6CA !important; }\n\n.green-text.text-accent-1 {\n  color: #B9F6CA !important; }\n\n.green.accent-2 {\n  background-color: #69F0AE !important; }\n\n.green-text.text-accent-2 {\n  color: #69F0AE !important; }\n\n.green.accent-3 {\n  background-color: #00E676 !important; }\n\n.green-text.text-accent-3 {\n  color: #00E676 !important; }\n\n.green.accent-4 {\n  background-color: #00C853 !important; }\n\n.green-text.text-accent-4 {\n  color: #00C853 !important; }\n\n.light-green {\n  background-color: #8bc34a !important; }\n\n.light-green-text {\n  color: #8bc34a !important; }\n\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important; }\n\n.light-green-text.text-lighten-5 {\n  color: #f1f8e9 !important; }\n\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important; }\n\n.light-green-text.text-lighten-4 {\n  color: #dcedc8 !important; }\n\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important; }\n\n.light-green-text.text-lighten-3 {\n  color: #c5e1a5 !important; }\n\n.light-green.lighten-2 {\n  background-color: #aed581 !important; }\n\n.light-green-text.text-lighten-2 {\n  color: #aed581 !important; }\n\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important; }\n\n.light-green-text.text-lighten-1 {\n  color: #9ccc65 !important; }\n\n.light-green.darken-1 {\n  background-color: #7cb342 !important; }\n\n.light-green-text.text-darken-1 {\n  color: #7cb342 !important; }\n\n.light-green.darken-2 {\n  background-color: #689f38 !important; }\n\n.light-green-text.text-darken-2 {\n  color: #689f38 !important; }\n\n.light-green.darken-3 {\n  background-color: #558b2f !important; }\n\n.light-green-text.text-darken-3 {\n  color: #558b2f !important; }\n\n.light-green.darken-4 {\n  background-color: #33691e !important; }\n\n.light-green-text.text-darken-4 {\n  color: #33691e !important; }\n\n.light-green.accent-1 {\n  background-color: #ccff90 !important; }\n\n.light-green-text.text-accent-1 {\n  color: #ccff90 !important; }\n\n.light-green.accent-2 {\n  background-color: #b2ff59 !important; }\n\n.light-green-text.text-accent-2 {\n  color: #b2ff59 !important; }\n\n.light-green.accent-3 {\n  background-color: #76ff03 !important; }\n\n.light-green-text.text-accent-3 {\n  color: #76ff03 !important; }\n\n.light-green.accent-4 {\n  background-color: #64dd17 !important; }\n\n.light-green-text.text-accent-4 {\n  color: #64dd17 !important; }\n\n.lime {\n  background-color: #cddc39 !important; }\n\n.lime-text {\n  color: #cddc39 !important; }\n\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important; }\n\n.lime-text.text-lighten-5 {\n  color: #f9fbe7 !important; }\n\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important; }\n\n.lime-text.text-lighten-4 {\n  color: #f0f4c3 !important; }\n\n.lime.lighten-3 {\n  background-color: #e6ee9c !important; }\n\n.lime-text.text-lighten-3 {\n  color: #e6ee9c !important; }\n\n.lime.lighten-2 {\n  background-color: #dce775 !important; }\n\n.lime-text.text-lighten-2 {\n  color: #dce775 !important; }\n\n.lime.lighten-1 {\n  background-color: #d4e157 !important; }\n\n.lime-text.text-lighten-1 {\n  color: #d4e157 !important; }\n\n.lime.darken-1 {\n  background-color: #c0ca33 !important; }\n\n.lime-text.text-darken-1 {\n  color: #c0ca33 !important; }\n\n.lime.darken-2 {\n  background-color: #afb42b !important; }\n\n.lime-text.text-darken-2 {\n  color: #afb42b !important; }\n\n.lime.darken-3 {\n  background-color: #9e9d24 !important; }\n\n.lime-text.text-darken-3 {\n  color: #9e9d24 !important; }\n\n.lime.darken-4 {\n  background-color: #827717 !important; }\n\n.lime-text.text-darken-4 {\n  color: #827717 !important; }\n\n.lime.accent-1 {\n  background-color: #f4ff81 !important; }\n\n.lime-text.text-accent-1 {\n  color: #f4ff81 !important; }\n\n.lime.accent-2 {\n  background-color: #eeff41 !important; }\n\n.lime-text.text-accent-2 {\n  color: #eeff41 !important; }\n\n.lime.accent-3 {\n  background-color: #c6ff00 !important; }\n\n.lime-text.text-accent-3 {\n  color: #c6ff00 !important; }\n\n.lime.accent-4 {\n  background-color: #aeea00 !important; }\n\n.lime-text.text-accent-4 {\n  color: #aeea00 !important; }\n\n.yellow {\n  background-color: #ffeb3b !important; }\n\n.yellow-text {\n  color: #ffeb3b !important; }\n\n.yellow.lighten-5 {\n  background-color: #fffde7 !important; }\n\n.yellow-text.text-lighten-5 {\n  color: #fffde7 !important; }\n\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important; }\n\n.yellow-text.text-lighten-4 {\n  color: #fff9c4 !important; }\n\n.yellow.lighten-3 {\n  background-color: #fff59d !important; }\n\n.yellow-text.text-lighten-3 {\n  color: #fff59d !important; }\n\n.yellow.lighten-2 {\n  background-color: #fff176 !important; }\n\n.yellow-text.text-lighten-2 {\n  color: #fff176 !important; }\n\n.yellow.lighten-1 {\n  background-color: #ffee58 !important; }\n\n.yellow-text.text-lighten-1 {\n  color: #ffee58 !important; }\n\n.yellow.darken-1 {\n  background-color: #fdd835 !important; }\n\n.yellow-text.text-darken-1 {\n  color: #fdd835 !important; }\n\n.yellow.darken-2 {\n  background-color: #fbc02d !important; }\n\n.yellow-text.text-darken-2 {\n  color: #fbc02d !important; }\n\n.yellow.darken-3 {\n  background-color: #f9a825 !important; }\n\n.yellow-text.text-darken-3 {\n  color: #f9a825 !important; }\n\n.yellow.darken-4 {\n  background-color: #f57f17 !important; }\n\n.yellow-text.text-darken-4 {\n  color: #f57f17 !important; }\n\n.yellow.accent-1 {\n  background-color: #ffff8d !important; }\n\n.yellow-text.text-accent-1 {\n  color: #ffff8d !important; }\n\n.yellow.accent-2 {\n  background-color: #ff0 !important; }\n\n.yellow-text.text-accent-2 {\n  color: #ff0 !important; }\n\n.yellow.accent-3 {\n  background-color: #ffea00 !important; }\n\n.yellow-text.text-accent-3 {\n  color: #ffea00 !important; }\n\n.yellow.accent-4 {\n  background-color: #ffd600 !important; }\n\n.yellow-text.text-accent-4 {\n  color: #ffd600 !important; }\n\n.amber {\n  background-color: #ffc107 !important; }\n\n.amber-text {\n  color: #ffc107 !important; }\n\n.amber.lighten-5 {\n  background-color: #fff8e1 !important; }\n\n.amber-text.text-lighten-5 {\n  color: #fff8e1 !important; }\n\n.amber.lighten-4 {\n  background-color: #ffecb3 !important; }\n\n.amber-text.text-lighten-4 {\n  color: #ffecb3 !important; }\n\n.amber.lighten-3 {\n  background-color: #ffe082 !important; }\n\n.amber-text.text-lighten-3 {\n  color: #ffe082 !important; }\n\n.amber.lighten-2 {\n  background-color: #ffd54f !important; }\n\n.amber-text.text-lighten-2 {\n  color: #ffd54f !important; }\n\n.amber.lighten-1 {\n  background-color: #ffca28 !important; }\n\n.amber-text.text-lighten-1 {\n  color: #ffca28 !important; }\n\n.amber.darken-1 {\n  background-color: #ffb300 !important; }\n\n.amber-text.text-darken-1 {\n  color: #ffb300 !important; }\n\n.amber.darken-2 {\n  background-color: #ffa000 !important; }\n\n.amber-text.text-darken-2 {\n  color: #ffa000 !important; }\n\n.amber.darken-3 {\n  background-color: #ff8f00 !important; }\n\n.amber-text.text-darken-3 {\n  color: #ff8f00 !important; }\n\n.amber.darken-4 {\n  background-color: #ff6f00 !important; }\n\n.amber-text.text-darken-4 {\n  color: #ff6f00 !important; }\n\n.amber.accent-1 {\n  background-color: #ffe57f !important; }\n\n.amber-text.text-accent-1 {\n  color: #ffe57f !important; }\n\n.amber.accent-2 {\n  background-color: #ffd740 !important; }\n\n.amber-text.text-accent-2 {\n  color: #ffd740 !important; }\n\n.amber.accent-3 {\n  background-color: #ffc400 !important; }\n\n.amber-text.text-accent-3 {\n  color: #ffc400 !important; }\n\n.amber.accent-4 {\n  background-color: #ffab00 !important; }\n\n.amber-text.text-accent-4 {\n  color: #ffab00 !important; }\n\n.orange {\n  background-color: #ff9800 !important; }\n\n.orange-text {\n  color: #ff9800 !important; }\n\n.orange.lighten-5 {\n  background-color: #fff3e0 !important; }\n\n.orange-text.text-lighten-5 {\n  color: #fff3e0 !important; }\n\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important; }\n\n.orange-text.text-lighten-4 {\n  color: #ffe0b2 !important; }\n\n.orange.lighten-3 {\n  background-color: #ffcc80 !important; }\n\n.orange-text.text-lighten-3 {\n  color: #ffcc80 !important; }\n\n.orange.lighten-2 {\n  background-color: #ffb74d !important; }\n\n.orange-text.text-lighten-2 {\n  color: #ffb74d !important; }\n\n.orange.lighten-1 {\n  background-color: #ffa726 !important; }\n\n.orange-text.text-lighten-1 {\n  color: #ffa726 !important; }\n\n.orange.darken-1 {\n  background-color: #fb8c00 !important; }\n\n.orange-text.text-darken-1 {\n  color: #fb8c00 !important; }\n\n.orange.darken-2 {\n  background-color: #f57c00 !important; }\n\n.orange-text.text-darken-2 {\n  color: #f57c00 !important; }\n\n.orange.darken-3 {\n  background-color: #ef6c00 !important; }\n\n.orange-text.text-darken-3 {\n  color: #ef6c00 !important; }\n\n.orange.darken-4 {\n  background-color: #e65100 !important; }\n\n.orange-text.text-darken-4 {\n  color: #e65100 !important; }\n\n.orange.accent-1 {\n  background-color: #ffd180 !important; }\n\n.orange-text.text-accent-1 {\n  color: #ffd180 !important; }\n\n.orange.accent-2 {\n  background-color: #ffab40 !important; }\n\n.orange-text.text-accent-2 {\n  color: #ffab40 !important; }\n\n.orange.accent-3 {\n  background-color: #ff9100 !important; }\n\n.orange-text.text-accent-3 {\n  color: #ff9100 !important; }\n\n.orange.accent-4 {\n  background-color: #ff6d00 !important; }\n\n.orange-text.text-accent-4 {\n  color: #ff6d00 !important; }\n\n.deep-orange {\n  background-color: #ff5722 !important; }\n\n.deep-orange-text {\n  color: #ff5722 !important; }\n\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important; }\n\n.deep-orange-text.text-lighten-5 {\n  color: #fbe9e7 !important; }\n\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important; }\n\n.deep-orange-text.text-lighten-4 {\n  color: #ffccbc !important; }\n\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important; }\n\n.deep-orange-text.text-lighten-3 {\n  color: #ffab91 !important; }\n\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important; }\n\n.deep-orange-text.text-lighten-2 {\n  color: #ff8a65 !important; }\n\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important; }\n\n.deep-orange-text.text-lighten-1 {\n  color: #ff7043 !important; }\n\n.deep-orange.darken-1 {\n  background-color: #f4511e !important; }\n\n.deep-orange-text.text-darken-1 {\n  color: #f4511e !important; }\n\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important; }\n\n.deep-orange-text.text-darken-2 {\n  color: #e64a19 !important; }\n\n.deep-orange.darken-3 {\n  background-color: #d84315 !important; }\n\n.deep-orange-text.text-darken-3 {\n  color: #d84315 !important; }\n\n.deep-orange.darken-4 {\n  background-color: #bf360c !important; }\n\n.deep-orange-text.text-darken-4 {\n  color: #bf360c !important; }\n\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important; }\n\n.deep-orange-text.text-accent-1 {\n  color: #ff9e80 !important; }\n\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important; }\n\n.deep-orange-text.text-accent-2 {\n  color: #ff6e40 !important; }\n\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important; }\n\n.deep-orange-text.text-accent-3 {\n  color: #ff3d00 !important; }\n\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important; }\n\n.deep-orange-text.text-accent-4 {\n  color: #dd2c00 !important; }\n\n.brown {\n  background-color: #795548 !important; }\n\n.brown-text {\n  color: #795548 !important; }\n\n.brown.lighten-5 {\n  background-color: #efebe9 !important; }\n\n.brown-text.text-lighten-5 {\n  color: #efebe9 !important; }\n\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important; }\n\n.brown-text.text-lighten-4 {\n  color: #d7ccc8 !important; }\n\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important; }\n\n.brown-text.text-lighten-3 {\n  color: #bcaaa4 !important; }\n\n.brown.lighten-2 {\n  background-color: #a1887f !important; }\n\n.brown-text.text-lighten-2 {\n  color: #a1887f !important; }\n\n.brown.lighten-1 {\n  background-color: #8d6e63 !important; }\n\n.brown-text.text-lighten-1 {\n  color: #8d6e63 !important; }\n\n.brown.darken-1 {\n  background-color: #6d4c41 !important; }\n\n.brown-text.text-darken-1 {\n  color: #6d4c41 !important; }\n\n.brown.darken-2 {\n  background-color: #5d4037 !important; }\n\n.brown-text.text-darken-2 {\n  color: #5d4037 !important; }\n\n.brown.darken-3 {\n  background-color: #4e342e !important; }\n\n.brown-text.text-darken-3 {\n  color: #4e342e !important; }\n\n.brown.darken-4 {\n  background-color: #3e2723 !important; }\n\n.brown-text.text-darken-4 {\n  color: #3e2723 !important; }\n\n.blue-grey {\n  background-color: #607d8b !important; }\n\n.blue-grey-text {\n  color: #607d8b !important; }\n\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important; }\n\n.blue-grey-text.text-lighten-5 {\n  color: #eceff1 !important; }\n\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important; }\n\n.blue-grey-text.text-lighten-4 {\n  color: #cfd8dc !important; }\n\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important; }\n\n.blue-grey-text.text-lighten-3 {\n  color: #b0bec5 !important; }\n\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important; }\n\n.blue-grey-text.text-lighten-2 {\n  color: #90a4ae !important; }\n\n.blue-grey.lighten-1 {\n  background-color: #78909c !important; }\n\n.blue-grey-text.text-lighten-1 {\n  color: #78909c !important; }\n\n.blue-grey.darken-1 {\n  background-color: #546e7a !important; }\n\n.blue-grey-text.text-darken-1 {\n  color: #546e7a !important; }\n\n.blue-grey.darken-2 {\n  background-color: #455a64 !important; }\n\n.blue-grey-text.text-darken-2 {\n  color: #455a64 !important; }\n\n.blue-grey.darken-3 {\n  background-color: #37474f !important; }\n\n.blue-grey-text.text-darken-3 {\n  color: #37474f !important; }\n\n.blue-grey.darken-4 {\n  background-color: #263238 !important; }\n\n.blue-grey-text.text-darken-4 {\n  color: #263238 !important; }\n\n.grey {\n  background-color: #9e9e9e !important; }\n\n.grey-text {\n  color: #9e9e9e !important; }\n\n.grey.lighten-5 {\n  background-color: #fafafa !important; }\n\n.grey-text.text-lighten-5 {\n  color: #fafafa !important; }\n\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important; }\n\n.grey-text.text-lighten-4 {\n  color: #f5f5f5 !important; }\n\n.grey.lighten-3 {\n  background-color: #eee !important; }\n\n.grey-text.text-lighten-3 {\n  color: #eee !important; }\n\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important; }\n\n.grey-text.text-lighten-2 {\n  color: #e0e0e0 !important; }\n\n.grey.lighten-1 {\n  background-color: #bdbdbd !important; }\n\n.grey-text.text-lighten-1 {\n  color: #bdbdbd !important; }\n\n.grey.darken-1 {\n  background-color: #757575 !important; }\n\n.grey-text.text-darken-1 {\n  color: #757575 !important; }\n\n.grey.darken-2 {\n  background-color: #616161 !important; }\n\n.grey-text.text-darken-2 {\n  color: #616161 !important; }\n\n.grey.darken-3 {\n  background-color: #424242 !important; }\n\n.grey-text.text-darken-3 {\n  color: #424242 !important; }\n\n.grey.darken-4 {\n  background-color: #212121 !important; }\n\n.grey-text.text-darken-4 {\n  color: #212121 !important; }\n\n.black {\n  background-color: #000 !important; }\n\n.black-text {\n  color: #000 !important; }\n\n.white {\n  background-color: #fff !important; }\n\n.white-text {\n  color: #fff !important; }\n\n.transparent {\n  background-color: transparent !important; }\n\n.transparent-text {\n  color: transparent !important; }\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block; }\n\naudio, canvas, progress, video {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden], template {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active, a:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb, strong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode, kbd, pre, samp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton, input, optgroup, select, textarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton, select {\n  text-transform: none; }\n\nbutton, html input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled], html input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button, input[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd, th {\n  padding: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\nul:not(.browser-default) {\n  padding-left: 0;\n  list-style-type: none; }\n\nul:not(.browser-default) li {\n  list-style-type: none; }\n\na {\n  color: #039be5;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent; }\n\n.valign-wrapper {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.valign-wrapper .valign {\n  display: block; }\n\n.clearfix {\n  clear: both; }\n\n.z-depth-0 {\n  box-shadow: none !important; }\n\n.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-floating, .dropdown-content, .collapsible, .side-nav {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); }\n\n.z-depth-1-half, .btn:hover, .btn-large:hover, .btn-floating:hover {\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2); }\n\n.z-depth-2 {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3); }\n\n.z-depth-3 {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3); }\n\n.z-depth-4, .modal {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3); }\n\n.z-depth-5 {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3); }\n\n.hoverable {\n  transition: box-shadow .25s;\n  box-shadow: 0; }\n\n.hoverable:hover {\n  transition: box-shadow .25s;\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e0e0e0; }\n\nblockquote {\n  margin: 20px 0;\n  padding-left: 1.5rem;\n  border-left: 5px solid #ee6e73; }\n\ni {\n  line-height: inherit; }\n\ni.left {\n  float: left;\n  margin-right: 15px; }\n\ni.right {\n  float: right;\n  margin-left: 15px; }\n\ni.tiny {\n  font-size: 1rem; }\n\ni.small {\n  font-size: 2rem; }\n\ni.medium {\n  font-size: 4rem; }\n\ni.large {\n  font-size: 6rem; }\n\nimg.responsive-img, video.responsive-video {\n  max-width: 100%;\n  height: auto; }\n\n.pagination li {\n  display: inline-block;\n  border-radius: 2px;\n  text-align: center;\n  vertical-align: top;\n  height: 30px; }\n\n.pagination li a {\n  color: #444;\n  display: inline-block;\n  font-size: 1.2rem;\n  padding: 0 10px;\n  line-height: 30px; }\n\n.pagination li.active a {\n  color: #fff; }\n\n.pagination li.active {\n  background-color: #ee6e73; }\n\n.pagination li.disabled a {\n  cursor: default;\n  color: #999; }\n\n.pagination li i {\n  font-size: 2rem; }\n\n.pagination li.pages ul li {\n  display: inline-block;\n  float: none; }\n\n@media only screen and (max-width: 992px) {\n  .pagination {\n    width: 100%; }\n  .pagination li.prev, .pagination li.next {\n    width: 10%; }\n  .pagination li.pages {\n    width: 80%;\n    overflow: hidden;\n    white-space: nowrap; } }\n\n.breadcrumb {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.7); }\n\n.breadcrumb i, .breadcrumb [class^=\"mdi-\"], .breadcrumb [class*=\"mdi-\"], .breadcrumb i.material-icons {\n  display: inline-block;\n  float: left;\n  font-size: 24px; }\n\n.breadcrumb:before {\n  content: '\\E5CC';\n  color: rgba(255, 255, 255, 0.7);\n  vertical-align: top;\n  display: inline-block;\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 25px;\n  margin: 0 10px 0 8px;\n  -webkit-font-smoothing: antialiased; }\n\n.breadcrumb:first-child:before {\n  display: none; }\n\n.breadcrumb:last-child {\n  color: #fff; }\n\n.parallax-container {\n  position: relative;\n  overflow: hidden;\n  height: 500px; }\n\n.parallax {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1; }\n\n.parallax img {\n  display: none;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%); }\n\n.pin-top, .pin-bottom {\n  position: relative; }\n\n.pinned {\n  position: fixed !important; }\n\nul.staggered-list li {\n  opacity: 0; }\n\n.fade-in {\n  opacity: 0;\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%; }\n\n@media only screen and (max-width: 600px) {\n  .hide-on-small-only, .hide-on-small-and-down {\n    display: none !important; } }\n\n@media only screen and (max-width: 992px) {\n  .hide-on-med-and-down {\n    display: none !important; } }\n\n@media only screen and (min-width: 601px) {\n  .hide-on-med-and-up {\n    display: none !important; } }\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .hide-on-med-only {\n    display: none !important; } }\n\n@media only screen and (min-width: 993px) {\n  .hide-on-large-only {\n    display: none !important; } }\n\n@media only screen and (min-width: 993px) {\n  .show-on-large {\n    display: block !important; } }\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .show-on-medium {\n    display: block !important; } }\n\n@media only screen and (max-width: 600px) {\n  .show-on-small {\n    display: block !important; } }\n\n@media only screen and (min-width: 601px) {\n  .show-on-medium-and-up {\n    display: block !important; } }\n\n@media only screen and (max-width: 992px) {\n  .show-on-medium-and-down {\n    display: block !important; } }\n\n@media only screen and (max-width: 600px) {\n  .center-on-small-only {\n    text-align: center; } }\n\nfooter.page-footer {\n  padding-top: 20px;\n  background-color: #ee6e73; }\n\nfooter.page-footer .footer-copyright {\n  overflow: hidden;\n  min-height: 50px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 10px 0px;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: rgba(51, 51, 51, 0.08); }\n\ntable, th, td {\n  border: none; }\n\ntable {\n  width: 100%;\n  display: table; }\n\ntable.bordered > thead > tr, table.bordered > tbody > tr {\n  border-bottom: 1px solid #d0d0d0; }\n\ntable.striped > tbody > tr:nth-child(odd) {\n  background-color: #f2f2f2; }\n\ntable.striped > tbody > tr > td {\n  border-radius: 0; }\n\ntable.highlight > tbody > tr {\n  transition: background-color .25s ease; }\n\ntable.highlight > tbody > tr:hover {\n  background-color: #f2f2f2; }\n\ntable.centered thead tr th, table.centered tbody tr td {\n  text-align: center; }\n\nthead {\n  border-bottom: 1px solid #d0d0d0; }\n\ntd, th {\n  padding: 15px 5px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  border-radius: 2px; }\n\n@media only screen and (max-width: 992px) {\n  table.responsive-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: block;\n    position: relative; }\n  table.responsive-table td:empty:before {\n    content: '\\00a0'; }\n  table.responsive-table th, table.responsive-table td {\n    margin: 0;\n    vertical-align: top; }\n  table.responsive-table th {\n    text-align: left; }\n  table.responsive-table thead {\n    display: block;\n    float: left; }\n  table.responsive-table thead tr {\n    display: block;\n    padding: 0 10px 0 0; }\n  table.responsive-table thead tr th::before {\n    content: \"\\00a0\"; }\n  table.responsive-table tbody {\n    display: block;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap; }\n  table.responsive-table tbody tr {\n    display: inline-block;\n    vertical-align: top; }\n  table.responsive-table th {\n    display: block;\n    text-align: right; }\n  table.responsive-table td {\n    display: block;\n    min-height: 1.25em;\n    text-align: left; }\n  table.responsive-table tr {\n    padding: 0 10px; }\n  table.responsive-table thead {\n    border: 0;\n    border-right: 1px solid #d0d0d0; }\n  table.responsive-table.bordered th {\n    border-bottom: 0;\n    border-left: 0; }\n  table.responsive-table.bordered td {\n    border-left: 0;\n    border-right: 0;\n    border-bottom: 0; }\n  table.responsive-table.bordered tr {\n    border: 0; }\n  table.responsive-table.bordered tbody tr {\n    border-right: 1px solid #d0d0d0; } }\n\n.collection {\n  margin: .5rem 0 1rem 0;\n  border: 1px solid #e0e0e0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative; }\n\n.collection .collection-item {\n  background-color: #fff;\n  line-height: 1.5rem;\n  padding: 10px 20px;\n  margin: 0;\n  border-bottom: 1px solid #e0e0e0; }\n\n.collection .collection-item.avatar {\n  min-height: 84px;\n  padding-left: 72px;\n  position: relative; }\n\n.collection .collection-item.avatar .circle {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  overflow: hidden;\n  left: 15px;\n  display: inline-block;\n  vertical-align: middle; }\n\n.collection .collection-item.avatar i.circle {\n  font-size: 18px;\n  line-height: 42px;\n  color: #fff;\n  background-color: #999;\n  text-align: center; }\n\n.collection .collection-item.avatar .title {\n  font-size: 16px; }\n\n.collection .collection-item.avatar p {\n  margin: 0; }\n\n.collection .collection-item.avatar .secondary-content {\n  position: absolute;\n  top: 16px;\n  right: 16px; }\n\n.collection .collection-item:last-child {\n  border-bottom: none; }\n\n.collection .collection-item.active {\n  background-color: #26a69a;\n  color: #eafaf9; }\n\n.collection .collection-item.active .secondary-content {\n  color: #fff; }\n\n.collection a.collection-item {\n  display: block;\n  transition: .25s;\n  color: #26a69a; }\n\n.collection a.collection-item:not(.active):hover {\n  background-color: #ddd; }\n\n.collection.with-header .collection-header {\n  background-color: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 10px 20px; }\n\n.collection.with-header .collection-item {\n  padding-left: 30px; }\n\n.collection.with-header .collection-item.avatar {\n  padding-left: 72px; }\n\n.secondary-content {\n  float: right;\n  color: #26a69a; }\n\n.collapsible .collection {\n  margin: 0;\n  border: none; }\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden; }\n\n.video-container iframe, .video-container object, .video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.progress {\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: #acece6;\n  border-radius: 2px;\n  margin: .5rem 0 1rem 0;\n  overflow: hidden; }\n\n.progress .determinate {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #26a69a;\n  transition: width .3s linear; }\n\n.progress .indeterminate {\n  background-color: #26a69a; }\n\n.progress .indeterminate:before {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite; }\n\n.progress .indeterminate:after {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  -webkit-animation-delay: 1.15s;\n  animation-delay: 1.15s; }\n\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n\n.hide {\n  display: none !important; }\n\n.left-align {\n  text-align: left; }\n\n.right-align {\n  text-align: right; }\n\n.center, .center-align {\n  text-align: center; }\n\n.left {\n  float: left !important; }\n\n.right {\n  float: right !important; }\n\n.no-select, input[type=range], input[type=range] + .thumb {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.circle {\n  border-radius: 50%; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.truncate {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.no-padding {\n  padding: 0 !important; }\n\nspan.badge {\n  min-width: 3rem;\n  padding: 0 6px;\n  margin-left: 14px;\n  text-align: center;\n  font-size: 1rem;\n  line-height: 22px;\n  height: 22px;\n  color: #757575;\n  float: right;\n  box-sizing: border-box; }\n\nspan.badge.new {\n  font-weight: 300;\n  font-size: 0.8rem;\n  color: #fff;\n  background-color: #26a69a;\n  border-radius: 2px; }\n\nspan.badge.new:after {\n  content: \" new\"; }\n\nspan.badge[data-badge-caption]::after {\n  content: \" \" attr(data-badge-caption); }\n\nnav ul a span.badge {\n  display: inline-block;\n  float: none;\n  margin-left: 4px;\n  line-height: 22px;\n  height: 22px; }\n\n.collection-item span.badge {\n  margin-top: calc(.75rem - 11px); }\n\n.collapsible span.badge {\n  margin-top: calc(1.5rem - 11px); }\n\n.side-nav span.badge {\n  margin-top: calc(24px - 11px); }\n\n.material-icons {\n  text-rendering: optimizeLegibility;\n  -webkit-font-feature-settings: 'liga';\n  -moz-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n\n.container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%; }\n\n@media only screen and (min-width: 601px) {\n  .container {\n    width: 85%; } }\n\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 70%; } }\n\n.container .row {\n  margin-left: -.75rem;\n  margin-right: -.75rem; }\n\n.section {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n\n.section.no-pad {\n  padding: 0; }\n\n.section.no-pad-bot {\n  padding-bottom: 0; }\n\n.section.no-pad-top {\n  padding-top: 0; }\n\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px; }\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.row .col {\n  float: left;\n  box-sizing: border-box;\n  padding: 0 .75rem;\n  min-height: 1px; }\n\n.row .col[class*=\"push-\"], .row .col[class*=\"pull-\"] {\n  position: relative; }\n\n.row .col.s1 {\n  width: 8.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n\n.row .col.s2 {\n  width: 16.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n\n.row .col.s3 {\n  width: 25%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n\n.row .col.s4 {\n  width: 33.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n\n.row .col.s5 {\n  width: 41.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n\n.row .col.s6 {\n  width: 50%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n\n.row .col.s7 {\n  width: 58.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n\n.row .col.s8 {\n  width: 66.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n\n.row .col.s9 {\n  width: 75%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n\n.row .col.s10 {\n  width: 83.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n\n.row .col.s11 {\n  width: 91.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n\n.row .col.s12 {\n  width: 100%;\n  margin-left: auto;\n  left: auto;\n  right: auto; }\n\n.row .col.offset-s1 {\n  margin-left: 8.3333333333%; }\n\n.row .col.pull-s1 {\n  right: 8.3333333333%; }\n\n.row .col.push-s1 {\n  left: 8.3333333333%; }\n\n.row .col.offset-s2 {\n  margin-left: 16.6666666667%; }\n\n.row .col.pull-s2 {\n  right: 16.6666666667%; }\n\n.row .col.push-s2 {\n  left: 16.6666666667%; }\n\n.row .col.offset-s3 {\n  margin-left: 25%; }\n\n.row .col.pull-s3 {\n  right: 25%; }\n\n.row .col.push-s3 {\n  left: 25%; }\n\n.row .col.offset-s4 {\n  margin-left: 33.3333333333%; }\n\n.row .col.pull-s4 {\n  right: 33.3333333333%; }\n\n.row .col.push-s4 {\n  left: 33.3333333333%; }\n\n.row .col.offset-s5 {\n  margin-left: 41.6666666667%; }\n\n.row .col.pull-s5 {\n  right: 41.6666666667%; }\n\n.row .col.push-s5 {\n  left: 41.6666666667%; }\n\n.row .col.offset-s6 {\n  margin-left: 50%; }\n\n.row .col.pull-s6 {\n  right: 50%; }\n\n.row .col.push-s6 {\n  left: 50%; }\n\n.row .col.offset-s7 {\n  margin-left: 58.3333333333%; }\n\n.row .col.pull-s7 {\n  right: 58.3333333333%; }\n\n.row .col.push-s7 {\n  left: 58.3333333333%; }\n\n.row .col.offset-s8 {\n  margin-left: 66.6666666667%; }\n\n.row .col.pull-s8 {\n  right: 66.6666666667%; }\n\n.row .col.push-s8 {\n  left: 66.6666666667%; }\n\n.row .col.offset-s9 {\n  margin-left: 75%; }\n\n.row .col.pull-s9 {\n  right: 75%; }\n\n.row .col.push-s9 {\n  left: 75%; }\n\n.row .col.offset-s10 {\n  margin-left: 83.3333333333%; }\n\n.row .col.pull-s10 {\n  right: 83.3333333333%; }\n\n.row .col.push-s10 {\n  left: 83.3333333333%; }\n\n.row .col.offset-s11 {\n  margin-left: 91.6666666667%; }\n\n.row .col.pull-s11 {\n  right: 91.6666666667%; }\n\n.row .col.push-s11 {\n  left: 91.6666666667%; }\n\n.row .col.offset-s12 {\n  margin-left: 100%; }\n\n.row .col.pull-s12 {\n  right: 100%; }\n\n.row .col.push-s12 {\n  left: 100%; }\n\n@media only screen and (min-width: 601px) {\n  .row .col.m1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.m12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.offset-m1 {\n    margin-left: 8.3333333333%; }\n  .row .col.pull-m1 {\n    right: 8.3333333333%; }\n  .row .col.push-m1 {\n    left: 8.3333333333%; }\n  .row .col.offset-m2 {\n    margin-left: 16.6666666667%; }\n  .row .col.pull-m2 {\n    right: 16.6666666667%; }\n  .row .col.push-m2 {\n    left: 16.6666666667%; }\n  .row .col.offset-m3 {\n    margin-left: 25%; }\n  .row .col.pull-m3 {\n    right: 25%; }\n  .row .col.push-m3 {\n    left: 25%; }\n  .row .col.offset-m4 {\n    margin-left: 33.3333333333%; }\n  .row .col.pull-m4 {\n    right: 33.3333333333%; }\n  .row .col.push-m4 {\n    left: 33.3333333333%; }\n  .row .col.offset-m5 {\n    margin-left: 41.6666666667%; }\n  .row .col.pull-m5 {\n    right: 41.6666666667%; }\n  .row .col.push-m5 {\n    left: 41.6666666667%; }\n  .row .col.offset-m6 {\n    margin-left: 50%; }\n  .row .col.pull-m6 {\n    right: 50%; }\n  .row .col.push-m6 {\n    left: 50%; }\n  .row .col.offset-m7 {\n    margin-left: 58.3333333333%; }\n  .row .col.pull-m7 {\n    right: 58.3333333333%; }\n  .row .col.push-m7 {\n    left: 58.3333333333%; }\n  .row .col.offset-m8 {\n    margin-left: 66.6666666667%; }\n  .row .col.pull-m8 {\n    right: 66.6666666667%; }\n  .row .col.push-m8 {\n    left: 66.6666666667%; }\n  .row .col.offset-m9 {\n    margin-left: 75%; }\n  .row .col.pull-m9 {\n    right: 75%; }\n  .row .col.push-m9 {\n    left: 75%; }\n  .row .col.offset-m10 {\n    margin-left: 83.3333333333%; }\n  .row .col.pull-m10 {\n    right: 83.3333333333%; }\n  .row .col.push-m10 {\n    left: 83.3333333333%; }\n  .row .col.offset-m11 {\n    margin-left: 91.6666666667%; }\n  .row .col.pull-m11 {\n    right: 91.6666666667%; }\n  .row .col.push-m11 {\n    left: 91.6666666667%; }\n  .row .col.offset-m12 {\n    margin-left: 100%; }\n  .row .col.pull-m12 {\n    right: 100%; }\n  .row .col.push-m12 {\n    left: 100%; } }\n\n@media only screen and (min-width: 993px) {\n  .row .col.l1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.l12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto; }\n  .row .col.offset-l1 {\n    margin-left: 8.3333333333%; }\n  .row .col.pull-l1 {\n    right: 8.3333333333%; }\n  .row .col.push-l1 {\n    left: 8.3333333333%; }\n  .row .col.offset-l2 {\n    margin-left: 16.6666666667%; }\n  .row .col.pull-l2 {\n    right: 16.6666666667%; }\n  .row .col.push-l2 {\n    left: 16.6666666667%; }\n  .row .col.offset-l3 {\n    margin-left: 25%; }\n  .row .col.pull-l3 {\n    right: 25%; }\n  .row .col.push-l3 {\n    left: 25%; }\n  .row .col.offset-l4 {\n    margin-left: 33.3333333333%; }\n  .row .col.pull-l4 {\n    right: 33.3333333333%; }\n  .row .col.push-l4 {\n    left: 33.3333333333%; }\n  .row .col.offset-l5 {\n    margin-left: 41.6666666667%; }\n  .row .col.pull-l5 {\n    right: 41.6666666667%; }\n  .row .col.push-l5 {\n    left: 41.6666666667%; }\n  .row .col.offset-l6 {\n    margin-left: 50%; }\n  .row .col.pull-l6 {\n    right: 50%; }\n  .row .col.push-l6 {\n    left: 50%; }\n  .row .col.offset-l7 {\n    margin-left: 58.3333333333%; }\n  .row .col.pull-l7 {\n    right: 58.3333333333%; }\n  .row .col.push-l7 {\n    left: 58.3333333333%; }\n  .row .col.offset-l8 {\n    margin-left: 66.6666666667%; }\n  .row .col.pull-l8 {\n    right: 66.6666666667%; }\n  .row .col.push-l8 {\n    left: 66.6666666667%; }\n  .row .col.offset-l9 {\n    margin-left: 75%; }\n  .row .col.pull-l9 {\n    right: 75%; }\n  .row .col.push-l9 {\n    left: 75%; }\n  .row .col.offset-l10 {\n    margin-left: 83.3333333333%; }\n  .row .col.pull-l10 {\n    right: 83.3333333333%; }\n  .row .col.push-l10 {\n    left: 83.3333333333%; }\n  .row .col.offset-l11 {\n    margin-left: 91.6666666667%; }\n  .row .col.pull-l11 {\n    right: 91.6666666667%; }\n  .row .col.push-l11 {\n    left: 91.6666666667%; }\n  .row .col.offset-l12 {\n    margin-left: 100%; }\n  .row .col.pull-l12 {\n    right: 100%; }\n  .row .col.push-l12 {\n    left: 100%; } }\n\nnav {\n  color: #fff;\n  background-color: #ee6e73;\n  width: 100%;\n  height: 56px;\n  line-height: 56px; }\n\nnav.nav-extended {\n  height: auto; }\n\nnav.nav-extended .nav-wrapper {\n  min-height: 56px;\n  height: auto; }\n\nnav.nav-extended .nav-content {\n  position: relative;\n  line-height: normal; }\n\nnav a {\n  color: #fff; }\n\nnav i, nav [class^=\"mdi-\"], nav [class*=\"mdi-\"], nav i.material-icons {\n  display: block;\n  font-size: 24px;\n  height: 56px;\n  line-height: 56px; }\n\nnav .nav-wrapper {\n  position: relative;\n  height: 100%; }\n\n@media only screen and (min-width: 993px) {\n  nav a.button-collapse {\n    display: none; } }\n\nnav .button-collapse {\n  float: left;\n  position: relative;\n  z-index: 1;\n  height: 56px;\n  margin: 0 18px; }\n\nnav .button-collapse i {\n  height: 56px;\n  line-height: 56px; }\n\nnav .brand-logo {\n  position: absolute;\n  color: #fff;\n  display: inline-block;\n  font-size: 2.1rem;\n  padding: 0;\n  white-space: nowrap; }\n\nnav .brand-logo.center {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%); }\n\n@media only screen and (max-width: 992px) {\n  nav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%); }\n  nav .brand-logo.left, nav .brand-logo.right {\n    padding: 0;\n    -webkit-transform: none;\n    transform: none; }\n  nav .brand-logo.left {\n    left: 0.5rem; }\n  nav .brand-logo.right {\n    right: 0.5rem;\n    left: auto; } }\n\nnav .brand-logo.right {\n  right: 0.5rem;\n  padding: 0; }\n\nnav .brand-logo i, nav .brand-logo [class^=\"mdi-\"], nav .brand-logo [class*=\"mdi-\"], nav .brand-logo i.material-icons {\n  float: left;\n  margin-right: 15px; }\n\nnav .nav-title {\n  display: inline-block;\n  font-size: 32px;\n  padding: 28px 0; }\n\nnav ul {\n  margin: 0; }\n\nnav ul li {\n  transition: background-color .3s;\n  float: left;\n  padding: 0; }\n\nnav ul li.active {\n  background-color: rgba(0, 0, 0, 0.1); }\n\nnav ul a {\n  transition: background-color .3s;\n  font-size: 1rem;\n  color: #fff;\n  display: block;\n  padding: 0 15px;\n  cursor: pointer; }\n\nnav ul a.btn, nav ul a.btn-large, nav ul a.btn-large, nav ul a.btn-flat, nav ul a.btn-floating {\n  margin-top: -2px;\n  margin-left: 15px;\n  margin-right: 15px; }\n\nnav ul a.btn > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-flat > .material-icons, nav ul a.btn-floating > .material-icons {\n  height: inherit;\n  line-height: inherit; }\n\nnav ul a:hover {\n  background-color: rgba(0, 0, 0, 0.1); }\n\nnav ul.left {\n  float: left; }\n\nnav form {\n  height: 100%; }\n\nnav .input-field {\n  margin: 0;\n  height: 100%; }\n\nnav .input-field input {\n  height: 100%;\n  font-size: 1.2rem;\n  border: none;\n  padding-left: 2rem; }\n\nnav .input-field input:focus, nav .input-field input[type=text]:valid, nav .input-field input[type=password]:valid, nav .input-field input[type=email]:valid, nav .input-field input[type=url]:valid, nav .input-field input[type=date]:valid {\n  border: none;\n  box-shadow: none; }\n\nnav .input-field label {\n  top: 0;\n  left: 0; }\n\nnav .input-field label i {\n  color: rgba(255, 255, 255, 0.7);\n  transition: color .3s; }\n\nnav .input-field label.active i {\n  color: #fff; }\n\n.navbar-fixed {\n  position: relative;\n  height: 56px;\n  z-index: 997; }\n\n.navbar-fixed nav {\n  position: fixed; }\n\n@media only screen and (min-width: 601px) {\n  nav.nav-extended .nav-wrapper {\n    min-height: 64px; }\n  nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {\n    height: 64px;\n    line-height: 64px; }\n  .navbar-fixed {\n    height: 64px; } }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Thin), url(\"../fonts/roboto/Roboto-Thin.eot\");\n  src: url(\"../fonts/roboto/Roboto-Thin.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/roboto/Roboto-Thin.woff2\") format(\"woff2\"), url(\"../fonts/roboto/Roboto-Thin.woff\") format(\"woff\"), url(\"../fonts/roboto/Roboto-Thin.ttf\") format(\"truetype\");\n  font-weight: 200; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Light), url(\"../fonts/roboto/Roboto-Light.eot\");\n  src: url(\"../fonts/roboto/Roboto-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/roboto/Roboto-Light.woff2\") format(\"woff2\"), url(\"../fonts/roboto/Roboto-Light.woff\") format(\"woff\"), url(\"../fonts/roboto/Roboto-Light.ttf\") format(\"truetype\");\n  font-weight: 300; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Regular), url(\"../fonts/roboto/Roboto-Regular.eot\");\n  src: url(\"../fonts/roboto/Roboto-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/roboto/Roboto-Regular.woff2\") format(\"woff2\"), url(\"../fonts/roboto/Roboto-Regular.woff\") format(\"woff\"), url(\"../fonts/roboto/Roboto-Regular.ttf\") format(\"truetype\");\n  font-weight: 400; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"../fonts/roboto/Roboto-Medium.eot\");\n  src: url(\"../fonts/roboto/Roboto-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/roboto/Roboto-Medium.woff2\") format(\"woff2\"), url(\"../fonts/roboto/Roboto-Medium.woff\") format(\"woff\"), url(\"../fonts/roboto/Roboto-Medium.ttf\") format(\"truetype\");\n  font-weight: 500; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"../fonts/roboto/Roboto-Bold.eot\");\n  src: url(\"../fonts/roboto/Roboto-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/roboto/Roboto-Bold.woff2\") format(\"woff2\"), url(\"../fonts/roboto/Roboto-Bold.woff\") format(\"woff\"), url(\"../fonts/roboto/Roboto-Bold.ttf\") format(\"truetype\");\n  font-weight: 700; }\n\na {\n  text-decoration: none; }\n\nhtml {\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.87); }\n\n@media only screen and (min-width: 0) {\n  html {\n    font-size: 14px; } }\n\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 14.5px; } }\n\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 15px; } }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400;\n  line-height: 1.1; }\n\nh1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\n  font-weight: inherit; }\n\nh1 {\n  font-size: 4.2rem;\n  line-height: 110%;\n  margin: 2.1rem 0 1.68rem 0; }\n\nh2 {\n  font-size: 3.56rem;\n  line-height: 110%;\n  margin: 1.78rem 0 1.424rem 0; }\n\nh3 {\n  font-size: 2.92rem;\n  line-height: 110%;\n  margin: 1.46rem 0 1.168rem 0; }\n\nh4 {\n  font-size: 2.28rem;\n  line-height: 110%;\n  margin: 1.14rem 0 .912rem 0; }\n\nh5 {\n  font-size: 1.64rem;\n  line-height: 110%;\n  margin: .82rem 0 .656rem 0; }\n\nh6 {\n  font-size: 1rem;\n  line-height: 110%;\n  margin: .5rem 0 .4rem 0; }\n\nem {\n  font-style: italic; }\n\nstrong {\n  font-weight: 500; }\n\nsmall {\n  font-size: 75%; }\n\n.light, footer.page-footer .footer-copyright {\n  font-weight: 300; }\n\n.thin {\n  font-weight: 200; }\n\n.flow-text {\n  font-weight: 300; }\n\n@media only screen and (min-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem; } }\n\n@media only screen and (min-width: 390px) {\n  .flow-text {\n    font-size: 1.224rem; } }\n\n@media only screen and (min-width: 420px) {\n  .flow-text {\n    font-size: 1.248rem; } }\n\n@media only screen and (min-width: 450px) {\n  .flow-text {\n    font-size: 1.272rem; } }\n\n@media only screen and (min-width: 480px) {\n  .flow-text {\n    font-size: 1.296rem; } }\n\n@media only screen and (min-width: 510px) {\n  .flow-text {\n    font-size: 1.32rem; } }\n\n@media only screen and (min-width: 540px) {\n  .flow-text {\n    font-size: 1.344rem; } }\n\n@media only screen and (min-width: 570px) {\n  .flow-text {\n    font-size: 1.368rem; } }\n\n@media only screen and (min-width: 600px) {\n  .flow-text {\n    font-size: 1.392rem; } }\n\n@media only screen and (min-width: 630px) {\n  .flow-text {\n    font-size: 1.416rem; } }\n\n@media only screen and (min-width: 660px) {\n  .flow-text {\n    font-size: 1.44rem; } }\n\n@media only screen and (min-width: 690px) {\n  .flow-text {\n    font-size: 1.464rem; } }\n\n@media only screen and (min-width: 720px) {\n  .flow-text {\n    font-size: 1.488rem; } }\n\n@media only screen and (min-width: 750px) {\n  .flow-text {\n    font-size: 1.512rem; } }\n\n@media only screen and (min-width: 780px) {\n  .flow-text {\n    font-size: 1.536rem; } }\n\n@media only screen and (min-width: 810px) {\n  .flow-text {\n    font-size: 1.56rem; } }\n\n@media only screen and (min-width: 840px) {\n  .flow-text {\n    font-size: 1.584rem; } }\n\n@media only screen and (min-width: 870px) {\n  .flow-text {\n    font-size: 1.608rem; } }\n\n@media only screen and (min-width: 900px) {\n  .flow-text {\n    font-size: 1.632rem; } }\n\n@media only screen and (min-width: 930px) {\n  .flow-text {\n    font-size: 1.656rem; } }\n\n@media only screen and (min-width: 960px) {\n  .flow-text {\n    font-size: 1.68rem; } }\n\n@media only screen and (max-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem; } }\n\n.scale-transition {\n  transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important; }\n\n.scale-transition.scale-out {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  transition: -webkit-transform .2s !important;\n  transition: transform .2s !important;\n  transition: transform .2s, -webkit-transform .2s !important; }\n\n.scale-transition.scale-in {\n  -webkit-transform: scale(1);\n  transform: scale(1); }\n\n.card-panel {\n  transition: box-shadow .25s;\n  padding: 24px;\n  margin: .5rem 0 1rem 0;\n  border-radius: 2px;\n  background-color: #fff; }\n\n.card {\n  position: relative;\n  margin: .5rem 0 1rem 0;\n  background-color: #fff;\n  transition: box-shadow .25s;\n  border-radius: 2px; }\n\n.card .card-title {\n  font-size: 24px;\n  font-weight: 300; }\n\n.card .card-title.activator {\n  cursor: pointer; }\n\n.card.small, .card.medium, .card.large {\n  position: relative; }\n\n.card.small .card-image, .card.medium .card-image, .card.large .card-image {\n  max-height: 60%;\n  overflow: hidden; }\n\n.card.small .card-image + .card-content, .card.medium .card-image + .card-content, .card.large .card-image + .card-content {\n  max-height: 40%; }\n\n.card.small .card-content, .card.medium .card-content, .card.large .card-content {\n  max-height: 100%;\n  overflow: hidden; }\n\n.card.small .card-action, .card.medium .card-action, .card.large .card-action {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.card.small {\n  height: 300px; }\n\n.card.medium {\n  height: 400px; }\n\n.card.large {\n  height: 500px; }\n\n.card.horizontal {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.card.horizontal.small .card-image, .card.horizontal.medium .card-image, .card.horizontal.large .card-image {\n  height: 100%;\n  max-height: none;\n  overflow: visible; }\n\n.card.horizontal.small .card-image img, .card.horizontal.medium .card-image img, .card.horizontal.large .card-image img {\n  height: 100%; }\n\n.card.horizontal .card-image {\n  max-width: 50%; }\n\n.card.horizontal .card-image img {\n  border-radius: 2px 0 0 2px;\n  max-width: 100%;\n  width: auto; }\n\n.card.horizontal .card-stacked {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  position: relative; }\n\n.card.horizontal .card-stacked .card-content {\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1; }\n\n.card.sticky-action .card-action {\n  z-index: 2; }\n\n.card.sticky-action .card-reveal {\n  z-index: 1;\n  padding-bottom: 64px; }\n\n.card .card-image {\n  position: relative; }\n\n.card .card-image img {\n  display: block;\n  border-radius: 2px 2px 0 0;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%; }\n\n.card .card-image .card-title {\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  max-width: 100%;\n  padding: 24px; }\n\n.card .card-content {\n  padding: 24px;\n  border-radius: 0 0 2px 2px; }\n\n.card .card-content p {\n  margin: 0;\n  color: inherit; }\n\n.card .card-content .card-title {\n  display: block;\n  line-height: 32px;\n  margin-bottom: 8px; }\n\n.card .card-content .card-title i {\n  line-height: 32px; }\n\n.card .card-action {\n  position: relative;\n  background-color: inherit;\n  border-top: 1px solid rgba(160, 160, 160, 0.2);\n  padding: 16px 24px; }\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {\n  color: #ffab40;\n  margin-right: 24px;\n  transition: color .3s ease;\n  text-transform: uppercase; }\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {\n  color: #ffd8a6; }\n\n.card .card-reveal {\n  padding: 24px;\n  position: absolute;\n  background-color: #fff;\n  width: 100%;\n  overflow-y: auto;\n  left: 0;\n  top: 100%;\n  height: 100%;\n  z-index: 3;\n  display: none; }\n\n.card .card-reveal .card-title {\n  cursor: pointer;\n  display: block; }\n\n#toast-container {\n  display: block;\n  position: fixed;\n  z-index: 10000; }\n\n@media only screen and (max-width: 600px) {\n  #toast-container {\n    min-width: 100%;\n    bottom: 0%; } }\n\n@media only screen and (min-width: 601px) and (max-width: 992px) {\n  #toast-container {\n    left: 5%;\n    bottom: 7%;\n    max-width: 90%; } }\n\n@media only screen and (min-width: 993px) {\n  #toast-container {\n    top: 10%;\n    right: 7%;\n    max-width: 86%; } }\n\n.toast {\n  border-radius: 2px;\n  top: 35px;\n  width: auto;\n  clear: both;\n  margin-top: 10px;\n  position: relative;\n  max-width: 100%;\n  height: auto;\n  min-height: 48px;\n  line-height: 1.5em;\n  word-break: break-all;\n  background-color: #323232;\n  padding: 10px 25px;\n  font-size: 1.1rem;\n  font-weight: 300;\n  color: #fff;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.toast .btn, .toast .btn-large, .toast .btn-flat {\n  margin: 0;\n  margin-left: 3rem; }\n\n.toast.rounded {\n  border-radius: 24px; }\n\n@media only screen and (max-width: 600px) {\n  .toast {\n    width: 100%;\n    border-radius: 0; } }\n\n@media only screen and (min-width: 601px) and (max-width: 992px) {\n  .toast {\n    float: left; } }\n\n@media only screen and (min-width: 993px) {\n  .toast {\n    float: right; } }\n\n.tabs {\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 48px;\n  width: 100%;\n  background-color: #fff;\n  margin: 0 auto;\n  white-space: nowrap; }\n\n.tabs.tabs-transparent {\n  background-color: transparent; }\n\n.tabs.tabs-transparent .tab a, .tabs.tabs-transparent .tab.disabled a, .tabs.tabs-transparent .tab.disabled a:hover {\n  color: rgba(255, 255, 255, 0.7); }\n\n.tabs.tabs-transparent .tab a:hover, .tabs.tabs-transparent .tab a.active {\n  color: #fff; }\n\n.tabs.tabs-transparent .indicator {\n  background-color: #fff; }\n\n.tabs.tabs-fixed-width {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.tabs.tabs-fixed-width .tab {\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1; }\n\n.tabs .tab {\n  display: inline-block;\n  text-align: center;\n  line-height: 48px;\n  height: 48px;\n  padding: 0;\n  margin: 0;\n  text-transform: uppercase; }\n\n.tabs .tab a {\n  color: rgba(238, 110, 115, 0.7);\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 0 24px;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  transition: color .28s ease; }\n\n.tabs .tab a:hover, .tabs .tab a.active {\n  background-color: transparent;\n  color: #ee6e73; }\n\n.tabs .tab.disabled a, .tabs .tab.disabled a:hover {\n  color: rgba(238, 110, 115, 0.7);\n  cursor: default; }\n\n.tabs .indicator {\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  background-color: #f6b2b5;\n  will-change: left, right; }\n\n@media only screen and (max-width: 992px) {\n  .tabs {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n  .tabs .tab {\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1; }\n  .tabs .tab a {\n    padding: 0 12px; } }\n\n.material-tooltip {\n  padding: 10px 8px;\n  font-size: 1rem;\n  z-index: 2000;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #fff;\n  min-height: 36px;\n  line-height: 120%;\n  opacity: 0;\n  position: absolute;\n  text-align: center;\n  max-width: calc(100% - 4px);\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  visibility: hidden; }\n\n.backdrop {\n  position: absolute;\n  opacity: 0;\n  height: 7px;\n  width: 14px;\n  border-radius: 0 0 50% 50%;\n  background-color: #323232;\n  z-index: -1;\n  -webkit-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  visibility: hidden; }\n\n.btn, .btn-large, .btn-flat {\n  border: none;\n  border-radius: 2px;\n  display: inline-block;\n  height: 36px;\n  line-height: 36px;\n  padding: 0 2rem;\n  text-transform: uppercase;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent; }\n\n.btn.disabled, .disabled.btn-large, .btn-floating.disabled, .btn-large.disabled, .btn-flat.disabled, .btn:disabled, .btn-large:disabled, .btn-floating:disabled, .btn-large:disabled, .btn-flat:disabled, .btn[disabled], [disabled].btn-large, .btn-floating[disabled], .btn-large[disabled], .btn-flat[disabled] {\n  pointer-events: none;\n  background-color: #DFDFDF !important;\n  box-shadow: none;\n  color: #9F9F9F !important;\n  cursor: default; }\n\n.btn.disabled:hover, .disabled.btn-large:hover, .btn-floating.disabled:hover, .btn-large.disabled:hover, .btn-flat.disabled:hover, .btn:disabled:hover, .btn-large:disabled:hover, .btn-floating:disabled:hover, .btn-large:disabled:hover, .btn-flat:disabled:hover, .btn[disabled]:hover, [disabled].btn-large:hover, .btn-floating[disabled]:hover, .btn-large[disabled]:hover, .btn-flat[disabled]:hover {\n  background-color: #DFDFDF !important;\n  color: #9F9F9F !important; }\n\n.btn, .btn-large, .btn-floating, .btn-large, .btn-flat {\n  outline: 0; }\n\n.btn i, .btn-large i, .btn-floating i, .btn-large i, .btn-flat i {\n  font-size: 1.3rem;\n  line-height: inherit; }\n\n.btn:focus, .btn-large:focus, .btn-floating:focus {\n  background-color: #1d7d74; }\n\n.btn, .btn-large {\n  text-decoration: none;\n  color: #fff;\n  background-color: #26a69a;\n  text-align: center;\n  letter-spacing: .5px;\n  transition: .2s ease-out;\n  cursor: pointer; }\n\n.btn:hover, .btn-large:hover {\n  background-color: #2bbbad; }\n\n.btn-floating {\n  display: inline-block;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  padding: 0;\n  background-color: #26a69a;\n  border-radius: 50%;\n  transition: .3s;\n  cursor: pointer;\n  vertical-align: middle; }\n\n.btn-floating:hover {\n  background-color: #26a69a; }\n\n.btn-floating:before {\n  border-radius: 0; }\n\n.btn-floating.btn-large {\n  width: 56px;\n  height: 56px; }\n\n.btn-floating.btn-large i {\n  line-height: 56px; }\n\n.btn-floating.halfway-fab {\n  position: absolute;\n  right: 24px;\n  bottom: 0;\n  -webkit-transform: translateY(50%);\n  transform: translateY(50%); }\n\n.btn-floating.halfway-fab.left {\n  right: auto;\n  left: 24px; }\n\n.btn-floating i {\n  width: inherit;\n  display: inline-block;\n  text-align: center;\n  color: #fff;\n  font-size: 1.6rem;\n  line-height: 40px; }\n\nbutton.btn-floating {\n  border: none; }\n\n.fixed-action-btn {\n  position: fixed;\n  right: 23px;\n  bottom: 23px;\n  padding-top: 15px;\n  margin-bottom: 0;\n  z-index: 998; }\n\n.fixed-action-btn.active ul {\n  visibility: visible; }\n\n.fixed-action-btn.horizontal {\n  padding: 0 0 0 15px; }\n\n.fixed-action-btn.horizontal ul {\n  text-align: right;\n  right: 64px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  height: 100%;\n  left: auto;\n  width: 500px; }\n\n.fixed-action-btn.horizontal ul li {\n  display: inline-block;\n  margin: 15px 15px 0 0; }\n\n.fixed-action-btn.toolbar {\n  padding: 0;\n  height: 56px; }\n\n.fixed-action-btn.toolbar.active > a i {\n  opacity: 0; }\n\n.fixed-action-btn.toolbar ul {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  top: 0;\n  bottom: 0; }\n\n.fixed-action-btn.toolbar ul li {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: inline-block;\n  margin: 0;\n  height: 100%;\n  transition: none; }\n\n.fixed-action-btn.toolbar ul li a {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  box-shadow: none;\n  color: #fff;\n  line-height: 56px;\n  z-index: 1; }\n\n.fixed-action-btn.toolbar ul li a i {\n  line-height: inherit; }\n\n.fixed-action-btn ul {\n  left: 0;\n  right: 0;\n  text-align: center;\n  position: absolute;\n  bottom: 64px;\n  margin: 0;\n  visibility: hidden; }\n\n.fixed-action-btn ul li {\n  margin-bottom: 15px; }\n\n.fixed-action-btn ul a.btn-floating {\n  opacity: 0; }\n\n.fixed-action-btn .fab-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 40px;\n  height: 40px;\n  background-color: #26a69a;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n  transform: scale(0); }\n\n.btn-flat {\n  box-shadow: none;\n  background-color: transparent;\n  color: #343434;\n  cursor: pointer;\n  transition: background-color .2s; }\n\n.btn-flat:focus, .btn-flat:active {\n  background-color: transparent; }\n\n.btn-flat:focus, .btn-flat:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: none; }\n\n.btn-flat:active {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.btn-flat.disabled {\n  background-color: transparent !important;\n  color: #b3b3b3 !important;\n  cursor: default; }\n\n.btn-large {\n  height: 54px;\n  line-height: 54px; }\n\n.btn-large i {\n  font-size: 1.6rem; }\n\n.btn-block {\n  display: block; }\n\n.dropdown-content {\n  background-color: #fff;\n  margin: 0;\n  display: none;\n  min-width: 100px;\n  max-height: 650px;\n  overflow-y: auto;\n  opacity: 0;\n  position: absolute;\n  z-index: 999;\n  will-change: width, height; }\n\n.dropdown-content li {\n  clear: both;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n  min-height: 50px;\n  line-height: 1.5rem;\n  width: 100%;\n  text-align: left;\n  text-transform: none; }\n\n.dropdown-content li:hover, .dropdown-content li.active, .dropdown-content li.selected {\n  background-color: #eee; }\n\n.dropdown-content li.active.selected {\n  background-color: #e1e1e1; }\n\n.dropdown-content li.divider {\n  min-height: 0;\n  height: 1px; }\n\n.dropdown-content li > a, .dropdown-content li > span {\n  font-size: 16px;\n  color: #26a69a;\n  display: block;\n  line-height: 22px;\n  padding: 14px 16px; }\n\n.dropdown-content li > span > label {\n  top: 1px;\n  left: 0;\n  height: 18px; }\n\n.dropdown-content li > a > i {\n  height: inherit;\n  line-height: inherit; }\n\n.input-field.col .dropdown-content [type=\"checkbox\"] + label {\n  top: 1px;\n  left: 0;\n  height: 18px; }\n\n/*!\n * Waves v0.6.0\n * http://fian.my.id/Waves\n *\n * Copyright 2014 Alfiana E. Sibuea and other contributors\n * Released under the MIT license\n * https://github.com/fians/Waves/blob/master/LICENSE\n */\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: .3s ease-out; }\n\n.waves-effect .waves-ripple {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  pointer-events: none; }\n\n.waves-effect.waves-light .waves-ripple {\n  background-color: rgba(255, 255, 255, 0.45); }\n\n.waves-effect.waves-red .waves-ripple {\n  background-color: rgba(244, 67, 54, 0.7); }\n\n.waves-effect.waves-yellow .waves-ripple {\n  background-color: rgba(255, 235, 59, 0.7); }\n\n.waves-effect.waves-orange .waves-ripple {\n  background-color: rgba(255, 152, 0, 0.7); }\n\n.waves-effect.waves-purple .waves-ripple {\n  background-color: rgba(156, 39, 176, 0.7); }\n\n.waves-effect.waves-green .waves-ripple {\n  background-color: rgba(76, 175, 80, 0.7); }\n\n.waves-effect.waves-teal .waves-ripple {\n  background-color: rgba(0, 150, 136, 0.7); }\n\n.waves-effect input[type=\"button\"], .waves-effect input[type=\"reset\"], .waves-effect input[type=\"submit\"] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none; }\n\n.waves-effect img {\n  position: relative;\n  z-index: -1; }\n\n.waves-notransition {\n  transition: none !important; }\n\n.waves-circle {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, #fff 100%, #000 100%); }\n\n.waves-input-wrapper {\n  border-radius: 0.2em;\n  vertical-align: bottom; }\n\n.waves-input-wrapper .waves-button-input {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1; }\n\n.waves-circle {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none; }\n\n.waves-block {\n  display: block; }\n\n.waves-effect .waves-ripple {\n  z-index: -1; }\n\n.modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: #fafafa;\n  padding: 0;\n  max-height: 70%;\n  width: 55%;\n  margin: auto;\n  overflow-y: auto;\n  border-radius: 2px;\n  will-change: top, opacity; }\n\n@media only screen and (max-width: 992px) {\n  .modal {\n    width: 80%; } }\n\n.modal h1, .modal h2, .modal h3, .modal h4 {\n  margin-top: 0; }\n\n.modal .modal-content {\n  padding: 24px; }\n\n.modal .modal-close {\n  cursor: pointer; }\n\n.modal .modal-footer {\n  border-radius: 0 0 2px 2px;\n  background-color: #fafafa;\n  padding: 4px 6px;\n  height: 56px;\n  width: 100%; }\n\n.modal .modal-footer .btn, .modal .modal-footer .btn-large, .modal .modal-footer .btn-flat {\n  float: right;\n  margin: 6px 0; }\n\n.modal-overlay {\n  position: fixed;\n  z-index: 999;\n  top: -100px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 125%;\n  width: 100%;\n  background: #000;\n  display: none;\n  will-change: opacity; }\n\n.modal.modal-fixed-footer {\n  padding: 0;\n  height: 70%; }\n\n.modal.modal-fixed-footer .modal-content {\n  position: absolute;\n  height: calc(100% - 56px);\n  max-height: 100%;\n  width: 100%;\n  overflow-y: auto; }\n\n.modal.modal-fixed-footer .modal-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  position: absolute;\n  bottom: 0; }\n\n.modal.bottom-sheet {\n  top: auto;\n  bottom: -100%;\n  margin: 0;\n  width: 100%;\n  max-height: 45%;\n  border-radius: 0;\n  will-change: bottom, opacity; }\n\n.collapsible {\n  border-top: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  margin: .5rem 0 1rem 0; }\n\n.collapsible-header {\n  display: block;\n  cursor: pointer;\n  min-height: 3rem;\n  line-height: 3rem;\n  padding: 0 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd; }\n\n.collapsible-header i {\n  width: 2rem;\n  font-size: 1.6rem;\n  line-height: 3rem;\n  display: block;\n  float: left;\n  text-align: center;\n  margin-right: 1rem; }\n\n.collapsible-body {\n  display: none;\n  border-bottom: 1px solid #ddd;\n  box-sizing: border-box;\n  padding: 2rem; }\n\n.side-nav .collapsible, .side-nav.fixed .collapsible {\n  border: none;\n  box-shadow: none; }\n\n.side-nav .collapsible li, .side-nav.fixed .collapsible li {\n  padding: 0; }\n\n.side-nav .collapsible-header, .side-nav.fixed .collapsible-header {\n  background-color: transparent;\n  border: none;\n  line-height: inherit;\n  height: inherit;\n  padding: 0 16px; }\n\n.side-nav .collapsible-header:hover, .side-nav.fixed .collapsible-header:hover {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.side-nav .collapsible-header i, .side-nav.fixed .collapsible-header i {\n  line-height: inherit; }\n\n.side-nav .collapsible-body, .side-nav.fixed .collapsible-body {\n  border: 0;\n  background-color: #fff; }\n\n.side-nav .collapsible-body li a, .side-nav.fixed .collapsible-body li a {\n  padding: 0 23.5px 0 31px; }\n\n.collapsible.popout {\n  border: none;\n  box-shadow: none; }\n\n.collapsible.popout > li {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  margin: 0 24px;\n  transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94); }\n\n.collapsible.popout > li.active {\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  margin: 16px 0; }\n\n.chip {\n  display: inline-block;\n  height: 32px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  line-height: 32px;\n  padding: 0 12px;\n  border-radius: 16px;\n  background-color: #e4e4e4;\n  margin-bottom: 5px;\n  margin-right: 5px; }\n\n.chip img {\n  float: left;\n  margin: 0 8px 0 -12px;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%; }\n\n.chip .close {\n  cursor: pointer;\n  float: right;\n  font-size: 16px;\n  line-height: 32px;\n  padding-left: 8px; }\n\n.chips {\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  box-shadow: none;\n  margin: 0 0 20px 0;\n  min-height: 45px;\n  outline: none;\n  transition: all .3s; }\n\n.chips.focus {\n  border-bottom: 1px solid #26a69a;\n  box-shadow: 0 1px 0 0 #26a69a; }\n\n.chips:hover {\n  cursor: text; }\n\n.chips .chip.selected {\n  background-color: #26a69a;\n  color: #fff; }\n\n.chips .input {\n  background: none;\n  border: 0;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  font-size: 1rem;\n  height: 3rem;\n  line-height: 32px;\n  outline: 0;\n  margin: 0;\n  padding: 0 !important;\n  width: 120px !important; }\n\n.chips .input:focus {\n  border: 0 !important;\n  box-shadow: none !important; }\n\n.prefix ~ .chips {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem); }\n\n.chips:empty ~ label {\n  font-size: 0.8rem;\n  -webkit-transform: translateY(-140%);\n  transform: translateY(-140%); }\n\n.materialboxed {\n  display: block;\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n  position: relative;\n  transition: opacity .4s;\n  -webkit-backface-visibility: hidden; }\n\n.materialboxed:hover:not(.active) {\n  opacity: .8; }\n\n.materialboxed.active {\n  cursor: -webkit-zoom-out;\n  cursor: zoom-out; }\n\n#materialbox-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #292929;\n  z-index: 1000;\n  will-change: opacity; }\n\n.materialbox-caption {\n  position: fixed;\n  display: none;\n  color: #fff;\n  line-height: 50px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  padding: 0% 15%;\n  height: 50px;\n  z-index: 1000;\n  -webkit-font-smoothing: antialiased; }\n\nselect:focus {\n  outline: 1px solid #c9f3ef; }\n\nbutton:focus {\n  outline: none;\n  background-color: #2ab7a9; }\n\nlabel {\n  font-size: .8rem;\n  color: #9e9e9e; }\n\n::-webkit-input-placeholder {\n  color: #d1d1d1; }\n\n:-moz-placeholder {\n  color: #d1d1d1; }\n\n::-moz-placeholder {\n  color: #d1d1d1; }\n\n:-ms-input-placeholder {\n  color: #d1d1d1; }\n\ninput:not([type]), input[type=text], input[type=password], input[type=email], input[type=url], input[type=time], input[type=date], input[type=datetime], input[type=datetime-local], input[type=tel], input[type=number], input[type=search], textarea.materialize-textarea {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  border-radius: 0;\n  outline: none;\n  height: 3rem;\n  width: 100%;\n  font-size: 1rem;\n  margin: 0 0 20px 0;\n  padding: 0;\n  box-shadow: none;\n  box-sizing: content-box;\n  transition: all 0.3s; }\n\ninput:not([type]):disabled, input:not([type])[readonly=\"readonly\"], input[type=text]:disabled, input[type=text][readonly=\"readonly\"], input[type=password]:disabled, input[type=password][readonly=\"readonly\"], input[type=email]:disabled, input[type=email][readonly=\"readonly\"], input[type=url]:disabled, input[type=url][readonly=\"readonly\"], input[type=time]:disabled, input[type=time][readonly=\"readonly\"], input[type=date]:disabled, input[type=date][readonly=\"readonly\"], input[type=datetime]:disabled, input[type=datetime][readonly=\"readonly\"], input[type=datetime-local]:disabled, input[type=datetime-local][readonly=\"readonly\"], input[type=tel]:disabled, input[type=tel][readonly=\"readonly\"], input[type=number]:disabled, input[type=number][readonly=\"readonly\"], input[type=search]:disabled, input[type=search][readonly=\"readonly\"], textarea.materialize-textarea:disabled, textarea.materialize-textarea[readonly=\"readonly\"] {\n  color: rgba(0, 0, 0, 0.26);\n  border-bottom: 1px dotted rgba(0, 0, 0, 0.26); }\n\ninput:not([type]):disabled + label, input:not([type])[readonly=\"readonly\"] + label, input[type=text]:disabled + label, input[type=text][readonly=\"readonly\"] + label, input[type=password]:disabled + label, input[type=password][readonly=\"readonly\"] + label, input[type=email]:disabled + label, input[type=email][readonly=\"readonly\"] + label, input[type=url]:disabled + label, input[type=url][readonly=\"readonly\"] + label, input[type=time]:disabled + label, input[type=time][readonly=\"readonly\"] + label, input[type=date]:disabled + label, input[type=date][readonly=\"readonly\"] + label, input[type=datetime]:disabled + label, input[type=datetime][readonly=\"readonly\"] + label, input[type=datetime-local]:disabled + label, input[type=datetime-local][readonly=\"readonly\"] + label, input[type=tel]:disabled + label, input[type=tel][readonly=\"readonly\"] + label, input[type=number]:disabled + label, input[type=number][readonly=\"readonly\"] + label, input[type=search]:disabled + label, input[type=search][readonly=\"readonly\"] + label, textarea.materialize-textarea:disabled + label, textarea.materialize-textarea[readonly=\"readonly\"] + label {\n  color: rgba(0, 0, 0, 0.26); }\n\ninput:not([type]):focus:not([readonly]), input[type=text]:focus:not([readonly]), input[type=password]:focus:not([readonly]), input[type=email]:focus:not([readonly]), input[type=url]:focus:not([readonly]), input[type=time]:focus:not([readonly]), input[type=date]:focus:not([readonly]), input[type=datetime]:focus:not([readonly]), input[type=datetime-local]:focus:not([readonly]), input[type=tel]:focus:not([readonly]), input[type=number]:focus:not([readonly]), input[type=search]:focus:not([readonly]), textarea.materialize-textarea:focus:not([readonly]) {\n  border-bottom: 1px solid #26a69a;\n  box-shadow: 0 1px 0 0 #26a69a; }\n\ninput:not([type]):focus:not([readonly]) + label, input[type=text]:focus:not([readonly]) + label, input[type=password]:focus:not([readonly]) + label, input[type=email]:focus:not([readonly]) + label, input[type=url]:focus:not([readonly]) + label, input[type=time]:focus:not([readonly]) + label, input[type=date]:focus:not([readonly]) + label, input[type=datetime]:focus:not([readonly]) + label, input[type=datetime-local]:focus:not([readonly]) + label, input[type=tel]:focus:not([readonly]) + label, input[type=number]:focus:not([readonly]) + label, input[type=search]:focus:not([readonly]) + label, textarea.materialize-textarea:focus:not([readonly]) + label {\n  color: #26a69a; }\n\ninput:not([type]).valid, input:not([type]):focus.valid, input[type=text].valid, input[type=text]:focus.valid, input[type=password].valid, input[type=password]:focus.valid, input[type=email].valid, input[type=email]:focus.valid, input[type=url].valid, input[type=url]:focus.valid, input[type=time].valid, input[type=time]:focus.valid, input[type=date].valid, input[type=date]:focus.valid, input[type=datetime].valid, input[type=datetime]:focus.valid, input[type=datetime-local].valid, input[type=datetime-local]:focus.valid, input[type=tel].valid, input[type=tel]:focus.valid, input[type=number].valid, input[type=number]:focus.valid, input[type=search].valid, input[type=search]:focus.valid, textarea.materialize-textarea.valid, textarea.materialize-textarea:focus.valid {\n  border-bottom: 1px solid #4CAF50;\n  box-shadow: 0 1px 0 0 #4CAF50; }\n\ninput:not([type]).valid + label:after, input:not([type]):focus.valid + label:after, input[type=text].valid + label:after, input[type=text]:focus.valid + label:after, input[type=password].valid + label:after, input[type=password]:focus.valid + label:after, input[type=email].valid + label:after, input[type=email]:focus.valid + label:after, input[type=url].valid + label:after, input[type=url]:focus.valid + label:after, input[type=time].valid + label:after, input[type=time]:focus.valid + label:after, input[type=date].valid + label:after, input[type=date]:focus.valid + label:after, input[type=datetime].valid + label:after, input[type=datetime]:focus.valid + label:after, input[type=datetime-local].valid + label:after, input[type=datetime-local]:focus.valid + label:after, input[type=tel].valid + label:after, input[type=tel]:focus.valid + label:after, input[type=number].valid + label:after, input[type=number]:focus.valid + label:after, input[type=search].valid + label:after, input[type=search]:focus.valid + label:after, textarea.materialize-textarea.valid + label:after, textarea.materialize-textarea:focus.valid + label:after {\n  content: attr(data-success);\n  color: #4CAF50;\n  opacity: 1; }\n\ninput:not([type]).invalid, input:not([type]):focus.invalid, input[type=text].invalid, input[type=text]:focus.invalid, input[type=password].invalid, input[type=password]:focus.invalid, input[type=email].invalid, input[type=email]:focus.invalid, input[type=url].invalid, input[type=url]:focus.invalid, input[type=time].invalid, input[type=time]:focus.invalid, input[type=date].invalid, input[type=date]:focus.invalid, input[type=datetime].invalid, input[type=datetime]:focus.invalid, input[type=datetime-local].invalid, input[type=datetime-local]:focus.invalid, input[type=tel].invalid, input[type=tel]:focus.invalid, input[type=number].invalid, input[type=number]:focus.invalid, input[type=search].invalid, input[type=search]:focus.invalid, textarea.materialize-textarea.invalid, textarea.materialize-textarea:focus.invalid {\n  border-bottom: 1px solid #F44336;\n  box-shadow: 0 1px 0 0 #F44336; }\n\ninput:not([type]).invalid + label:after, input:not([type]):focus.invalid + label:after, input[type=text].invalid + label:after, input[type=text]:focus.invalid + label:after, input[type=password].invalid + label:after, input[type=password]:focus.invalid + label:after, input[type=email].invalid + label:after, input[type=email]:focus.invalid + label:after, input[type=url].invalid + label:after, input[type=url]:focus.invalid + label:after, input[type=time].invalid + label:after, input[type=time]:focus.invalid + label:after, input[type=date].invalid + label:after, input[type=date]:focus.invalid + label:after, input[type=datetime].invalid + label:after, input[type=datetime]:focus.invalid + label:after, input[type=datetime-local].invalid + label:after, input[type=datetime-local]:focus.invalid + label:after, input[type=tel].invalid + label:after, input[type=tel]:focus.invalid + label:after, input[type=number].invalid + label:after, input[type=number]:focus.invalid + label:after, input[type=search].invalid + label:after, input[type=search]:focus.invalid + label:after, textarea.materialize-textarea.invalid + label:after, textarea.materialize-textarea:focus.invalid + label:after {\n  content: attr(data-error);\n  color: #F44336;\n  opacity: 1; }\n\ninput:not([type]).validate + label, input[type=text].validate + label, input[type=password].validate + label, input[type=email].validate + label, input[type=url].validate + label, input[type=time].validate + label, input[type=date].validate + label, input[type=datetime].validate + label, input[type=datetime-local].validate + label, input[type=tel].validate + label, input[type=number].validate + label, input[type=search].validate + label, textarea.materialize-textarea.validate + label {\n  width: 100%;\n  pointer-events: none; }\n\ninput:not([type]) + label:after, input[type=text] + label:after, input[type=password] + label:after, input[type=email] + label:after, input[type=url] + label:after, input[type=time] + label:after, input[type=date] + label:after, input[type=datetime] + label:after, input[type=datetime-local] + label:after, input[type=tel] + label:after, input[type=number] + label:after, input[type=search] + label:after, textarea.materialize-textarea + label:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 60px;\n  opacity: 0;\n  transition: .2s opacity ease-out, .2s color ease-out; }\n\n.input-field {\n  position: relative;\n  margin-top: 1rem; }\n\n.input-field.inline {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 5px; }\n\n.input-field.inline input, .input-field.inline .select-dropdown {\n  margin-bottom: 1rem; }\n\n.input-field.col label {\n  left: .75rem; }\n\n.input-field.col .prefix ~ label, .input-field.col .prefix ~ .validate ~ label {\n  width: calc(100% - 3rem - 1.5rem); }\n\n.input-field label {\n  color: #9e9e9e;\n  position: absolute;\n  top: 0.8rem;\n  left: 0;\n  font-size: 1rem;\n  cursor: text;\n  transition: .2s ease-out; }\n\n.input-field label:not(.label-icon).active {\n  font-size: .8rem;\n  -webkit-transform: translateY(-140%);\n  transform: translateY(-140%); }\n\n.input-field .prefix {\n  position: absolute;\n  width: 3rem;\n  font-size: 2rem;\n  transition: color .2s; }\n\n.input-field .prefix.active {\n  color: #26a69a; }\n\n.input-field .prefix ~ input, .input-field .prefix ~ textarea, .input-field .prefix ~ label, .input-field .prefix ~ .validate ~ label, .input-field .prefix ~ .autocomplete-content {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem); }\n\n.input-field .prefix ~ label {\n  margin-left: 3rem; }\n\n@media only screen and (max-width: 992px) {\n  .input-field .prefix ~ input {\n    width: 86%;\n    width: calc(100% - 3rem); } }\n\n@media only screen and (max-width: 600px) {\n  .input-field .prefix ~ input {\n    width: 80%;\n    width: calc(100% - 3rem); } }\n\n.input-field input[type=search] {\n  display: block;\n  line-height: inherit;\n  padding-left: 4rem;\n  width: calc(100% - 4rem); }\n\n.input-field input[type=search]:focus {\n  background-color: #fff;\n  border: 0;\n  box-shadow: none;\n  color: #444; }\n\n.input-field input[type=search]:focus + label i, .input-field input[type=search]:focus ~ .mdi-navigation-close, .input-field input[type=search]:focus ~ .material-icons {\n  color: #444; }\n\n.input-field input[type=search] + label {\n  left: 1rem; }\n\n.input-field input[type=search] ~ .mdi-navigation-close, .input-field input[type=search] ~ .material-icons {\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  color: transparent;\n  cursor: pointer;\n  font-size: 2rem;\n  transition: .3s color; }\n\ntextarea {\n  width: 100%;\n  height: 3rem;\n  background-color: transparent; }\n\ntextarea.materialize-textarea {\n  overflow-y: hidden;\n  padding: .8rem 0 1.6rem 0;\n  resize: none;\n  min-height: 3rem; }\n\n.hiddendiv {\n  display: none;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  padding-top: 1.2rem; }\n\n.autocomplete-content {\n  margin-top: -15px;\n  display: block;\n  opacity: 1;\n  position: static; }\n\n.autocomplete-content li .highlight {\n  color: #444; }\n\n.autocomplete-content li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px; }\n\n[type=\"radio\"]:not(:checked), [type=\"radio\"]:checked {\n  position: absolute;\n  left: -9999px;\n  opacity: 0; }\n\n[type=\"radio\"]:not(:checked) + label, [type=\"radio\"]:checked + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  transition: .28s ease;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n[type=\"radio\"] + label:before, [type=\"radio\"] + label:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 4px;\n  width: 16px;\n  height: 16px;\n  z-index: 0;\n  transition: .28s ease; }\n\n[type=\"radio\"]:not(:checked) + label:before, [type=\"radio\"]:not(:checked) + label:after, [type=\"radio\"]:checked + label:before, [type=\"radio\"]:checked + label:after, [type=\"radio\"].with-gap:checked + label:before, [type=\"radio\"].with-gap:checked + label:after {\n  border-radius: 50%; }\n\n[type=\"radio\"]:not(:checked) + label:before, [type=\"radio\"]:not(:checked) + label:after {\n  border: 2px solid #5a5a5a; }\n\n[type=\"radio\"]:not(:checked) + label:after {\n  -webkit-transform: scale(0);\n  transform: scale(0); }\n\n[type=\"radio\"]:checked + label:before {\n  border: 2px solid transparent; }\n\n[type=\"radio\"]:checked + label:after, [type=\"radio\"].with-gap:checked + label:before, [type=\"radio\"].with-gap:checked + label:after {\n  border: 2px solid #26a69a; }\n\n[type=\"radio\"]:checked + label:after, [type=\"radio\"].with-gap:checked + label:after {\n  background-color: #26a69a; }\n\n[type=\"radio\"]:checked + label:after {\n  -webkit-transform: scale(1.02);\n  transform: scale(1.02); }\n\n[type=\"radio\"].with-gap:checked + label:after {\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5); }\n\n[type=\"radio\"].tabbed:focus + label:before {\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1); }\n\n[type=\"radio\"].with-gap:disabled:checked + label:before {\n  border: 2px solid rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"].with-gap:disabled:checked + label:after {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"]:disabled:not(:checked) + label:before, [type=\"radio\"]:disabled:checked + label:before {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"]:disabled + label {\n  color: rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"]:disabled:not(:checked) + label:before {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"]:disabled:checked + label:after {\n  background-color: rgba(0, 0, 0, 0.26);\n  border-color: #BDBDBD; }\n\nform p {\n  margin-bottom: 10px;\n  text-align: left; }\n\nform p:last-child {\n  margin-bottom: 0; }\n\n[type=\"checkbox\"]:not(:checked), [type=\"checkbox\"]:checked {\n  position: absolute;\n  left: -9999px;\n  opacity: 0; }\n\n[type=\"checkbox\"] + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none; }\n\n[type=\"checkbox\"] + label:before, [type=\"checkbox\"]:not(.filled-in) + label:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  z-index: 0;\n  border: 2px solid #5a5a5a;\n  border-radius: 1px;\n  margin-top: 2px;\n  transition: .2s; }\n\n[type=\"checkbox\"]:not(.filled-in) + label:after {\n  border: 0;\n  -webkit-transform: scale(0);\n  transform: scale(0); }\n\n[type=\"checkbox\"]:not(:checked):disabled + label:before {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.26); }\n\n[type=\"checkbox\"].tabbed:focus + label:after {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  border: 0;\n  border-radius: 50%;\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.1); }\n\n[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -5px;\n  width: 12px;\n  height: 22px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #26a69a;\n  border-bottom: 2px solid #26a69a;\n  -webkit-transform: rotate(40deg);\n  transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%; }\n\n[type=\"checkbox\"]:checked:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.26);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.26); }\n\n[type=\"checkbox\"]:indeterminate + label:before {\n  top: -11px;\n  left: -12px;\n  width: 10px;\n  height: 22px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid #26a69a;\n  border-bottom: none;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%; }\n\n[type=\"checkbox\"]:indeterminate:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n[type=\"checkbox\"].filled-in + label:after {\n  border-radius: 2px; }\n\n[type=\"checkbox\"].filled-in + label:before, [type=\"checkbox\"].filled-in + label:after {\n  content: '';\n  left: 0;\n  position: absolute;\n  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  z-index: 1; }\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:before {\n  width: 0;\n  height: 0;\n  border: 3px solid transparent;\n  left: 6px;\n  top: 10px;\n  -webkit-transform: rotateZ(37deg);\n  transform: rotateZ(37deg);\n  -webkit-transform-origin: 20% 40%;\n  transform-origin: 100% 100%; }\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:after {\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 2px solid #5a5a5a;\n  top: 0px;\n  z-index: 0; }\n\n[type=\"checkbox\"].filled-in:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 8px;\n  height: 13px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  -webkit-transform: rotateZ(37deg);\n  transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%; }\n\n[type=\"checkbox\"].filled-in:checked + label:after {\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0; }\n\n[type=\"checkbox\"].filled-in.tabbed:focus + label:after {\n  border-radius: 2px;\n  border-color: #5a5a5a;\n  background-color: rgba(0, 0, 0, 0.1); }\n\n[type=\"checkbox\"].filled-in.tabbed:checked:focus + label:after {\n  border-radius: 2px;\n  background-color: #26a69a;\n  border-color: #26a69a; }\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:before {\n  background-color: transparent;\n  border: 2px solid transparent; }\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:after {\n  border-color: transparent;\n  background-color: #BDBDBD; }\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:before {\n  background-color: transparent; }\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:after {\n  background-color: #BDBDBD;\n  border-color: #BDBDBD; }\n\n.switch, .switch * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none; }\n\n.switch label {\n  cursor: pointer; }\n\n.switch label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #84c7c1; }\n\n.switch label input[type=checkbox]:checked + .lever:after {\n  background-color: #26a69a;\n  left: 24px; }\n\n.switch label .lever {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 15px;\n  background-color: #818181;\n  border-radius: 15px;\n  margin-right: 10px;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n  margin: 0 16px; }\n\n.switch label .lever:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 21px;\n  height: 21px;\n  background-color: #F1F1F1;\n  border-radius: 21px;\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n  left: -5px;\n  top: -3px;\n  transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease; }\n\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active::after, input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(38, 166, 154, 0.1); }\n\ninput[type=checkbox]:not(:disabled) ~ .lever:active:after, input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.08); }\n\n.switch input[type=checkbox][disabled] + .lever {\n  cursor: default; }\n\n.switch label input[type=checkbox][disabled] + .lever:after, .switch label input[type=checkbox][disabled]:checked + .lever:after {\n  background-color: #BDBDBD; }\n\nselect {\n  display: none; }\n\nselect.browser-default {\n  display: block; }\n\nselect {\n  background-color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #f2f2f2;\n  border-radius: 2px;\n  height: 3rem; }\n\n.select-label {\n  position: absolute; }\n\n.select-wrapper {\n  position: relative; }\n\n.select-wrapper input.select-dropdown {\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  outline: none;\n  height: 3rem;\n  line-height: 3rem;\n  width: 100%;\n  font-size: 1rem;\n  margin: 0 0 20px 0;\n  padding: 0;\n  display: block; }\n\n.select-wrapper span.caret {\n  color: initial;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  height: 10px;\n  margin: auto 0;\n  font-size: 10px;\n  line-height: 10px; }\n\n.select-wrapper span.caret.disabled {\n  color: rgba(0, 0, 0, 0.26); }\n\n.select-wrapper + label {\n  position: absolute;\n  top: -14px;\n  font-size: .8rem; }\n\nselect:disabled {\n  color: rgba(0, 0, 0, 0.3); }\n\n.select-wrapper input.select-dropdown:disabled {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3); }\n\n.select-wrapper i {\n  color: rgba(0, 0, 0, 0.3); }\n\n.select-dropdown li.disabled, .select-dropdown li.disabled > span, .select-dropdown li.optgroup {\n  color: rgba(0, 0, 0, 0.3);\n  background-color: transparent; }\n\n.prefix ~ .select-wrapper {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem); }\n\n.prefix ~ label {\n  margin-left: 3rem; }\n\n.select-dropdown li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n  float: right; }\n\n.select-dropdown li.optgroup {\n  border-top: 1px solid #eee; }\n\n.select-dropdown li.optgroup.selected > span {\n  color: rgba(0, 0, 0, 0.7); }\n\n.select-dropdown li.optgroup > span {\n  color: rgba(0, 0, 0, 0.4); }\n\n.select-dropdown li.optgroup ~ li.optgroup-option {\n  padding-left: 1rem; }\n\n.file-field {\n  position: relative; }\n\n.file-field .file-path-wrapper {\n  overflow: hidden;\n  padding-left: 10px; }\n\n.file-field input.file-path {\n  width: 100%; }\n\n.file-field .btn, .file-field .btn-large {\n  float: left;\n  height: 3rem;\n  line-height: 3rem; }\n\n.file-field span {\n  cursor: pointer; }\n\n.file-field input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n\n.range-field {\n  position: relative; }\n\ninput[type=range], input[type=range] + .thumb {\n  cursor: pointer; }\n\ninput[type=range] {\n  position: relative;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  margin: 15px 0;\n  padding: 0; }\n\ninput[type=range]:focus {\n  outline: none; }\n\ninput[type=range] + .thumb {\n  position: absolute;\n  border: none;\n  height: 0;\n  width: 0;\n  border-radius: 50%;\n  background-color: #26a69a;\n  top: 10px;\n  margin-left: -6px;\n  -webkit-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\n\ninput[type=range] + .thumb .value {\n  display: block;\n  width: 30px;\n  text-align: center;\n  color: #26a69a;\n  font-size: 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\ninput[type=range] + .thumb.active {\n  border-radius: 50% 50% 50% 0; }\n\ninput[type=range] + .thumb.active .value {\n  color: #fff;\n  margin-left: -1px;\n  margin-top: 8px;\n  font-size: 10px; }\n\ninput[type=range] {\n  -webkit-appearance: none; }\n\ninput[type=range]::-webkit-slider-runnable-track {\n  height: 3px;\n  background: #c2c0c2;\n  border: none; }\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background-color: #26a69a;\n  -webkit-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n  margin: -5px 0 0 0;\n  transition: .3s; }\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #ccc; }\n\ninput[type=range] {\n  border: 1px solid white; }\n\ninput[type=range]::-moz-range-track {\n  height: 3px;\n  background: #ddd;\n  border: none; }\n\ninput[type=range]::-moz-range-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  margin-top: -5px; }\n\ninput[type=range]:-moz-focusring {\n  outline: 1px solid #fff;\n  outline-offset: -1px; }\n\ninput[type=range]:focus::-moz-range-track {\n  background: #ccc; }\n\ninput[type=range]::-ms-track {\n  height: 3px;\n  background: transparent;\n  border-color: transparent;\n  border-width: 6px 0;\n  color: transparent; }\n\ninput[type=range]::-ms-fill-lower {\n  background: #777; }\n\ninput[type=range]::-ms-fill-upper {\n  background: #ddd; }\n\ninput[type=range]::-ms-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a; }\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: #888; }\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #ccc; }\n\n.table-of-contents.fixed {\n  position: fixed; }\n\n.table-of-contents li {\n  padding: 2px 0; }\n\n.table-of-contents a {\n  display: inline-block;\n  font-weight: 300;\n  color: #757575;\n  padding-left: 20px;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  letter-spacing: .4;\n  display: inline-block; }\n\n.table-of-contents a:hover {\n  color: #a8a8a8;\n  padding-left: 19px;\n  border-left: 1px solid #ee6e73; }\n\n.table-of-contents a.active {\n  font-weight: 500;\n  padding-left: 18px;\n  border-left: 2px solid #ee6e73; }\n\n.side-nav {\n  position: fixed;\n  width: 300px;\n  left: 0;\n  top: 0;\n  margin: 0;\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n  height: 100%;\n  height: calc(100% + 60px);\n  height: -moz-calc(100%);\n  padding-bottom: 60px;\n  background-color: #fff;\n  z-index: 999;\n  overflow-y: auto;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translateX(-105%);\n  transform: translateX(-105%); }\n\n.side-nav.right-aligned {\n  right: 0;\n  -webkit-transform: translateX(105%);\n  transform: translateX(105%);\n  left: auto;\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%); }\n\n.side-nav .collapsible {\n  margin: 0; }\n\n.side-nav li {\n  float: none;\n  line-height: 48px; }\n\n.side-nav li.active {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.side-nav a {\n  color: rgba(0, 0, 0, 0.87);\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  height: 48px;\n  line-height: 48px;\n  padding: 0 32px; }\n\n.side-nav a:hover {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.side-nav a.btn, .side-nav a.btn-large, .side-nav a.btn-large, .side-nav a.btn-flat, .side-nav a.btn-floating {\n  margin: 10px 15px; }\n\n.side-nav a.btn, .side-nav a.btn-large, .side-nav a.btn-large, .side-nav a.btn-floating {\n  color: #fff; }\n\n.side-nav a.btn-flat {\n  color: #343434; }\n\n.side-nav a.btn:hover, .side-nav a.btn-large:hover, .side-nav a.btn-large:hover {\n  background-color: #2bbbad; }\n\n.side-nav a.btn-floating:hover {\n  background-color: #26a69a; }\n\n.side-nav li > a > i, .side-nav li > a > [class^=\"mdi-\"], .side-nav li > a > [class*=\"mdi-\"], .side-nav li > a > i.material-icons {\n  float: left;\n  height: 48px;\n  line-height: 48px;\n  margin: 0 32px 0 0;\n  width: 24px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.side-nav .divider {\n  margin: 8px 0 0 0; }\n\n.side-nav .subheader {\n  cursor: initial;\n  pointer-events: none;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 48px; }\n\n.side-nav .subheader:hover {\n  background-color: transparent; }\n\n.side-nav .userView {\n  position: relative;\n  padding: 32px 32px 0;\n  margin-bottom: 8px; }\n\n.side-nav .userView > a {\n  height: auto;\n  padding: 0; }\n\n.side-nav .userView > a:hover {\n  background-color: transparent; }\n\n.side-nav .userView .background {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1; }\n\n.side-nav .userView .circle, .side-nav .userView .name, .side-nav .userView .email {\n  display: block; }\n\n.side-nav .userView .circle {\n  height: 64px;\n  width: 64px; }\n\n.side-nav .userView .name, .side-nav .userView .email {\n  font-size: 14px;\n  line-height: 24px; }\n\n.side-nav .userView .name {\n  margin-top: 16px;\n  font-weight: 500; }\n\n.side-nav .userView .email {\n  padding-bottom: 16px;\n  font-weight: 400; }\n\n.drag-target {\n  height: 100%;\n  width: 10px;\n  position: fixed;\n  top: 0;\n  z-index: 998; }\n\n.side-nav.fixed {\n  left: 0;\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  position: fixed; }\n\n.side-nav.fixed.right-aligned {\n  right: 0;\n  left: auto; }\n\n@media only screen and (max-width: 992px) {\n  .side-nav.fixed {\n    -webkit-transform: translateX(-105%);\n    transform: translateX(-105%); }\n  .side-nav.fixed.right-aligned {\n    -webkit-transform: translateX(105%);\n    transform: translateX(105%); }\n  .side-nav a {\n    padding: 0 16px; }\n  .side-nav .userView {\n    padding: 16px 16px 0; } }\n\n.side-nav .collapsible-body > ul:not(.collapsible) > li.active, .side-nav.fixed .collapsible-body > ul:not(.collapsible) > li.active {\n  background-color: #ee6e73; }\n\n.side-nav .collapsible-body > ul:not(.collapsible) > li.active a, .side-nav.fixed .collapsible-body > ul:not(.collapsible) > li.active a {\n  color: #fff; }\n\n#sidenav-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 120vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 997;\n  will-change: opacity; }\n\n.preloader-wrapper {\n  display: inline-block;\n  position: relative;\n  width: 48px;\n  height: 48px; }\n\n.preloader-wrapper.small {\n  width: 36px;\n  height: 36px; }\n\n.preloader-wrapper.big {\n  width: 64px;\n  height: 64px; }\n\n.preloader-wrapper.active {\n  -webkit-animation: container-rotate 1568ms linear infinite;\n  animation: container-rotate 1568ms linear infinite; }\n\n@-webkit-keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-color: #26a69a; }\n\n.spinner-blue, .spinner-blue-only {\n  border-color: #4285f4; }\n\n.spinner-red, .spinner-red-only {\n  border-color: #db4437; }\n\n.spinner-yellow, .spinner-yellow-only {\n  border-color: #f4b400; }\n\n.spinner-green, .spinner-green-only {\n  border-color: #0f9d58; }\n\n.active .spinner-layer.spinner-blue {\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer.spinner-red {\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer.spinner-yellow {\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer.spinner-green {\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer, .active .spinner-layer.spinner-blue-only, .active .spinner-layer.spinner-red-only, .active .spinner-layer.spinner-yellow-only, .active .spinner-layer.spinner-green-only {\n  opacity: 1;\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n@-webkit-keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg); }\n  25% {\n    -webkit-transform: rotate(270deg); }\n  37.5% {\n    -webkit-transform: rotate(405deg); }\n  50% {\n    -webkit-transform: rotate(540deg); }\n  62.5% {\n    -webkit-transform: rotate(675deg); }\n  75% {\n    -webkit-transform: rotate(810deg); }\n  87.5% {\n    -webkit-transform: rotate(945deg); }\n  to {\n    -webkit-transform: rotate(1080deg); } }\n\n@keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg); }\n  25% {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg); }\n  37.5% {\n    -webkit-transform: rotate(405deg);\n    transform: rotate(405deg); }\n  50% {\n    -webkit-transform: rotate(540deg);\n    transform: rotate(540deg); }\n  62.5% {\n    -webkit-transform: rotate(675deg);\n    transform: rotate(675deg); }\n  75% {\n    -webkit-transform: rotate(810deg);\n    transform: rotate(810deg); }\n  87.5% {\n    -webkit-transform: rotate(945deg);\n    transform: rotate(945deg); }\n  to {\n    -webkit-transform: rotate(1080deg);\n    transform: rotate(1080deg); } }\n\n@-webkit-keyframes blue-fade-in-out {\n  from {\n    opacity: 1; }\n  25% {\n    opacity: 1; }\n  26% {\n    opacity: 0; }\n  89% {\n    opacity: 0; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@keyframes blue-fade-in-out {\n  from {\n    opacity: 1; }\n  25% {\n    opacity: 1; }\n  26% {\n    opacity: 0; }\n  89% {\n    opacity: 0; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes red-fade-in-out {\n  from {\n    opacity: 0; }\n  15% {\n    opacity: 0; }\n  25% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  51% {\n    opacity: 0; } }\n\n@keyframes red-fade-in-out {\n  from {\n    opacity: 0; }\n  15% {\n    opacity: 0; }\n  25% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  51% {\n    opacity: 0; } }\n\n@-webkit-keyframes yellow-fade-in-out {\n  from {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  76% {\n    opacity: 0; } }\n\n@keyframes yellow-fade-in-out {\n  from {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  76% {\n    opacity: 0; } }\n\n@-webkit-keyframes green-fade-in-out {\n  from {\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  75% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes green-fade-in-out {\n  from {\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  75% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n\n.gap-patch .circle {\n  width: 1000%;\n  left: -450%; }\n\n.circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n\n.circle-clipper .circle {\n  width: 200%;\n  height: 100%;\n  border-width: 3px;\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent !important;\n  border-radius: 50%;\n  -webkit-animation: none;\n  animation: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.circle-clipper.left .circle {\n  left: 0;\n  border-right-color: transparent !important;\n  -webkit-transform: rotate(129deg);\n  transform: rotate(129deg); }\n\n.circle-clipper.right .circle {\n  left: -100%;\n  border-left-color: transparent !important;\n  -webkit-transform: rotate(-129deg);\n  transform: rotate(-129deg); }\n\n.active .circle-clipper.left .circle {\n  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .circle-clipper.right .circle {\n  -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n@-webkit-keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg); }\n  50% {\n    -webkit-transform: rotate(-5deg); }\n  to {\n    -webkit-transform: rotate(130deg); } }\n\n@keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n    transform: rotate(130deg); }\n  50% {\n    -webkit-transform: rotate(-5deg);\n    transform: rotate(-5deg); }\n  to {\n    -webkit-transform: rotate(130deg);\n    transform: rotate(130deg); } }\n\n@-webkit-keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg); }\n  50% {\n    -webkit-transform: rotate(5deg); }\n  to {\n    -webkit-transform: rotate(-130deg); } }\n\n@keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n    transform: rotate(-130deg); }\n  50% {\n    -webkit-transform: rotate(5deg);\n    transform: rotate(5deg); }\n  to {\n    -webkit-transform: rotate(-130deg);\n    transform: rotate(-130deg); } }\n\n#spinnerContainer.cooldown {\n  -webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n  animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1); }\n\n@-webkit-keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.slider {\n  position: relative;\n  height: 400px;\n  width: 100%; }\n\n.slider.fullscreen {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.slider.fullscreen ul.slides {\n  height: 100%; }\n\n.slider.fullscreen ul.indicators {\n  z-index: 2;\n  bottom: 30px; }\n\n.slider .slides {\n  background-color: #9e9e9e;\n  margin: 0;\n  height: 400px; }\n\n.slider .slides li {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: inherit;\n  overflow: hidden; }\n\n.slider .slides li img {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center; }\n\n.slider .slides li .caption {\n  color: #fff;\n  position: absolute;\n  top: 15%;\n  left: 15%;\n  width: 70%;\n  opacity: 0; }\n\n.slider .slides li .caption p {\n  color: #e0e0e0; }\n\n.slider .slides li.active {\n  z-index: 2; }\n\n.slider .indicators {\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0; }\n\n.slider .indicators .indicator-item {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  margin: 0 12px;\n  background-color: #e0e0e0;\n  transition: background-color .3s;\n  border-radius: 50%; }\n\n.slider .indicators .indicator-item.active {\n  background-color: #4CAF50; }\n\n.carousel {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 400px;\n  -webkit-perspective: 500px;\n  perspective: 500px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  transform-origin: 0% 50%; }\n\n.carousel.carousel-slider {\n  top: 0;\n  left: 0;\n  height: 0; }\n\n.carousel.carousel-slider .carousel-fixed-item {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 20px;\n  z-index: 1; }\n\n.carousel.carousel-slider .carousel-fixed-item.with-indicators {\n  bottom: 68px; }\n\n.carousel.carousel-slider .carousel-item {\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.carousel.carousel-slider .carousel-item h2 {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 32px; }\n\n.carousel.carousel-slider .carousel-item p {\n  font-size: 15px; }\n\n.carousel .carousel-item {\n  display: none;\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.carousel .carousel-item img {\n  width: 100%; }\n\n.carousel .indicators {\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0; }\n\n.carousel .indicators .indicator-item {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 8px;\n  width: 8px;\n  margin: 24px 4px;\n  background-color: rgba(255, 255, 255, 0.5);\n  transition: background-color .3s;\n  border-radius: 50%; }\n\n.carousel .indicators .indicator-item.active {\n  background-color: #fff; }\n\n.picker {\n  font-size: 16px;\n  text-align: left;\n  line-height: 1.2;\n  color: #000000;\n  position: absolute;\n  z-index: 10000;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.picker__input {\n  cursor: default; }\n\n.picker__input.picker__input--active {\n  border-color: #0089ec; }\n\n.picker__holder {\n  width: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n\n/*!\n * Default mobile-first, responsive styling for pickadate.js\n * Demo: http://amsul.github.io/pickadate.js\n */\n.picker__holder, .picker__frame {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 100%; }\n\n.picker__holder {\n  position: fixed;\n  transition: background 0.15s ease-out, top 0s 0.15s;\n  -webkit-backface-visibility: hidden; }\n\n.picker__frame {\n  position: absolute;\n  margin: 0 auto;\n  min-width: 256px;\n  width: 300px;\n  max-height: 350px;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  -moz-opacity: 0;\n  opacity: 0;\n  transition: all 0.15s ease-out; }\n\n@media (min-height: 28.875em) {\n  .picker__frame {\n    overflow: visible;\n    top: auto;\n    bottom: -100%;\n    max-height: 80%; } }\n\n@media (min-height: 40.125em) {\n  .picker__frame {\n    margin-bottom: 7.5%; } }\n\n.picker__wrap {\n  display: table;\n  width: 100%;\n  height: 100%; }\n\n@media (min-height: 28.875em) {\n  .picker__wrap {\n    display: block; } }\n\n.picker__box {\n  background: #ffffff;\n  display: table-cell;\n  vertical-align: middle; }\n\n@media (min-height: 28.875em) {\n  .picker__box {\n    display: block;\n    border: 1px solid #777777;\n    border-top-color: #898989;\n    border-bottom-width: 0;\n    border-radius: 5px 5px 0 0;\n    box-shadow: 0 12px 36px 16px rgba(0, 0, 0, 0.24); } }\n\n.picker--opened .picker__holder {\n  top: 0;\n  background: transparent;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)\";\n  zoom: 1;\n  background: rgba(0, 0, 0, 0.32);\n  transition: background 0.15s ease-out; }\n\n.picker--opened .picker__frame {\n  top: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n  -moz-opacity: 1;\n  opacity: 1; }\n\n@media (min-height: 35.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto; } }\n\n.picker__input.picker__input--active {\n  border-color: #E3F2FD; }\n\n.picker__frame {\n  margin: 0 auto;\n  max-width: 325px; }\n\n@media (min-height: 38.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto; } }\n\n.picker__box {\n  padding: 0 1em; }\n\n.picker__header {\n  text-align: center;\n  position: relative;\n  margin-top: .75em; }\n\n.picker__month, .picker__year {\n  display: inline-block;\n  margin-left: .25em;\n  margin-right: .25em; }\n\n.picker__select--month, .picker__select--year {\n  height: 2em;\n  padding: 0;\n  margin-left: .25em;\n  margin-right: .25em; }\n\n.picker__select--month.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 40%; }\n\n.picker__select--year.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 26%; }\n\n.picker__select--month:focus, .picker__select--year:focus {\n  border-color: rgba(0, 0, 0, 0.05); }\n\n.picker__nav--prev, .picker__nav--next {\n  position: absolute;\n  padding: .5em 1.25em;\n  width: 1em;\n  height: 1em;\n  box-sizing: content-box;\n  top: -0.25em; }\n\n.picker__nav--prev {\n  left: -1em;\n  padding-right: 1.25em; }\n\n.picker__nav--next {\n  right: -1em;\n  padding-left: 1.25em; }\n\n.picker__nav--disabled, .picker__nav--disabled:hover, .picker__nav--disabled:before, .picker__nav--disabled:before:hover {\n  cursor: default;\n  background: none;\n  border-right-color: #f5f5f5;\n  border-left-color: #f5f5f5; }\n\n.picker__table {\n  text-align: center;\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  font-size: 1rem;\n  width: 100%;\n  margin-top: .75em;\n  margin-bottom: .5em; }\n\n.picker__table th, .picker__table td {\n  text-align: center; }\n\n.picker__table td {\n  margin: 0;\n  padding: 0; }\n\n.picker__weekday {\n  width: 14.285714286%;\n  font-size: .75em;\n  padding-bottom: .25em;\n  color: #999999;\n  font-weight: 500; }\n\n@media (min-height: 33.875em) {\n  .picker__weekday {\n    padding-bottom: .5em; } }\n\n.picker__day--today {\n  position: relative;\n  color: #595959;\n  letter-spacing: -.3;\n  padding: .75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent; }\n\n.picker__day--disabled:before {\n  border-top-color: #aaaaaa; }\n\n.picker__day--infocus:hover {\n  cursor: pointer;\n  color: #000;\n  font-weight: 500; }\n\n.picker__day--outfocus {\n  display: none;\n  padding: .75rem 0;\n  color: #fff; }\n\n.picker__day--outfocus:hover {\n  cursor: pointer;\n  color: #dddddd;\n  font-weight: 500; }\n\n.picker__day--highlighted:hover, .picker--focused .picker__day--highlighted {\n  cursor: pointer; }\n\n.picker__day--selected, .picker__day--selected:hover, .picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.75);\n  transform: scale(0.75);\n  background: #0089ec;\n  color: #ffffff; }\n\n.picker__day--disabled, .picker__day--disabled:hover, .picker--focused .picker__day--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default; }\n\n.picker__day--highlighted.picker__day--disabled, .picker__day--highlighted.picker__day--disabled:hover {\n  background: #bbbbbb; }\n\n.picker__footer {\n  text-align: center;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.picker__button--today, .picker__button--clear, .picker__button--close {\n  border: 1px solid #ffffff;\n  background: #ffffff;\n  font-size: .8em;\n  padding: .66em 0;\n  font-weight: bold;\n  width: 33%;\n  display: inline-block;\n  vertical-align: bottom; }\n\n.picker__button--today:hover, .picker__button--clear:hover, .picker__button--close:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n  border-bottom-color: #b1dcfb; }\n\n.picker__button--today:focus, .picker__button--clear:focus, .picker__button--close:focus {\n  background: #b1dcfb;\n  border-color: rgba(0, 0, 0, 0.05);\n  outline: none; }\n\n.picker__button--today:before, .picker__button--clear:before, .picker__button--close:before {\n  position: relative;\n  display: inline-block;\n  height: 0; }\n\n.picker__button--today:before, .picker__button--clear:before {\n  content: \" \";\n  margin-right: .45em; }\n\n.picker__button--today:before {\n  top: -0.05em;\n  width: 0;\n  border-top: 0.66em solid #0059bc;\n  border-left: .66em solid transparent; }\n\n.picker__button--clear:before {\n  top: -0.25em;\n  width: .66em;\n  border-top: 3px solid #ee2200; }\n\n.picker__button--close:before {\n  content: \"\\D7\";\n  top: -0.1em;\n  vertical-align: top;\n  font-size: 1.1em;\n  margin-right: .35em;\n  color: #777777; }\n\n.picker__button--today[disabled], .picker__button--today[disabled]:hover {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default; }\n\n.picker__button--today[disabled]:before {\n  border-top-color: #aaaaaa; }\n\n.picker__box {\n  border-radius: 2px;\n  overflow: hidden; }\n\n.picker__date-display {\n  text-align: center;\n  background-color: #26a69a;\n  color: #fff;\n  padding-bottom: 15px;\n  font-weight: 300; }\n\n.picker__nav--prev:hover, .picker__nav--next:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #a1ded8; }\n\n.picker__weekday-display {\n  background-color: #1f897f;\n  padding: 10px;\n  font-weight: 200;\n  letter-spacing: .5;\n  font-size: 1rem;\n  margin-bottom: 15px; }\n\n.picker__month-display {\n  text-transform: uppercase;\n  font-size: 2rem; }\n\n.picker__day-display {\n  font-size: 4.5rem;\n  font-weight: 400; }\n\n.picker__year-display {\n  font-size: 1.8rem;\n  color: rgba(255, 255, 255, 0.4); }\n\n.picker__box {\n  padding: 0; }\n\n.picker__calendar-container {\n  padding: 0 1rem; }\n\n.picker__calendar-container thead {\n  border: none; }\n\n.picker__table {\n  margin-top: 0;\n  margin-bottom: .5em; }\n\n.picker__day--infocus {\n  color: #595959;\n  letter-spacing: -.3;\n  padding: .75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent; }\n\n.picker__day.picker__day--today {\n  color: #26a69a; }\n\n.picker__day.picker__day--today.picker__day--selected {\n  color: #fff; }\n\n.picker__weekday {\n  font-size: .9rem; }\n\n.picker__day--selected, .picker__day--selected:hover, .picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.9);\n  transform: scale(0.9);\n  background-color: #26a69a;\n  color: #ffffff; }\n\n.picker__day--selected.picker__day--outfocus, .picker__day--selected:hover.picker__day--outfocus, .picker--focused .picker__day--selected.picker__day--outfocus {\n  background-color: #a1ded8; }\n\n.picker__footer {\n  text-align: right;\n  padding: 5px 10px; }\n\n.picker__close, .picker__today {\n  font-size: 1.1rem;\n  padding: 0 1rem;\n  color: #26a69a; }\n\n.picker__nav--prev:before, .picker__nav--next:before {\n  content: \" \";\n  border-top: .5em solid transparent;\n  border-bottom: .5em solid transparent;\n  border-right: 0.75em solid #676767;\n  width: 0;\n  height: 0;\n  display: block;\n  margin: 0 auto; }\n\n.picker__nav--next:before {\n  border-right: 0;\n  border-left: 0.75em solid #676767; }\n\nbutton.picker__today:focus, button.picker__clear:focus, button.picker__close:focus {\n  background-color: #a1ded8; }\n\n.picker__list {\n  list-style: none;\n  padding: 0.75em 0 4.2em;\n  margin: 0; }\n\n.picker__list-item {\n  border-bottom: 1px solid #dddddd;\n  border-top: 1px solid #dddddd;\n  margin-bottom: -1px;\n  position: relative;\n  background: #ffffff;\n  padding: .75em 1.25em; }\n\n@media (min-height: 46.75em) {\n  .picker__list-item {\n    padding: .5em 1em; } }\n\n.picker__list-item:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n  border-color: #0089ec;\n  z-index: 10; }\n\n.picker__list-item--highlighted {\n  border-color: #0089ec;\n  z-index: 10; }\n\n.picker__list-item--highlighted:hover, .picker--focused .picker__list-item--highlighted {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb; }\n\n.picker__list-item--selected, .picker__list-item--selected:hover, .picker--focused .picker__list-item--selected {\n  background: #0089ec;\n  color: #ffffff;\n  z-index: 10; }\n\n.picker__list-item--disabled, .picker__list-item--disabled:hover, .picker--focused .picker__list-item--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default;\n  border-color: #dddddd;\n  z-index: auto; }\n\n.picker--time .picker__button--clear {\n  display: block;\n  width: 80%;\n  margin: 1em auto 0;\n  padding: 1em 1.25em;\n  background: none;\n  border: 0;\n  font-weight: 500;\n  font-size: .67em;\n  text-align: center;\n  text-transform: uppercase;\n  color: #666; }\n\n.picker--time .picker__button--clear:hover, .picker--time .picker__button--clear:focus {\n  color: #000000;\n  background: #b1dcfb;\n  background: #ee2200;\n  border-color: #ee2200;\n  cursor: pointer;\n  color: #ffffff;\n  outline: none; }\n\n.picker--time .picker__button--clear:before {\n  top: -0.25em;\n  color: #666;\n  font-size: 1.25em;\n  font-weight: bold; }\n\n.picker--time .picker__button--clear:hover:before, .picker--time .picker__button--clear:focus:before {\n  color: #ffffff; }\n\n.picker--time .picker__frame {\n  min-width: 256px;\n  max-width: 320px; }\n\n.picker--time .picker__box {\n  font-size: 1em;\n  background: #f2f2f2;\n  padding: 0; }\n\n@media (min-height: 40.125em) {\n  .picker--time .picker__box {\n    margin-bottom: 5em; } }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "/*\n\nThis file is referenced by the Webpack script. Any changes you make in this file \nor those it references will be inlined in dev mode or bundled \ninto styles.css in production. If you are not using WebPack, then any changes to \nthis file will **not** be reflected in your website.\n\n<tl;dr> If you're NOT using WebPack, make all your changes and imports in\n\n<link rel=\"stylesheet\" href=\"css/styles.css\">\n\nAny CSS you reference here will become part of your asset pipeline and benefit\nfrom postCSS/CSSNext and autoprefixer.\n\n */\n/* @import 'filename.css';  */\n/* @import 'main.css'  */\n", "", {"version":3,"sources":["/Users/nagib/Documents/StaticWeb/2017/HST-Materialize-Hugo/public/css/styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;GAcG;AAEH,8BAA8B;AAE9B,yBAAyB","file":"styles.css","sourcesContent":["/*\n\nThis file is referenced by the Webpack script. Any changes you make in this file \nor those it references will be inlined in dev mode or bundled \ninto styles.css in production. If you are not using WebPack, then any changes to \nthis file will **not** be reflected in your website.\n\n<tl;dr> If you're NOT using WebPack, make all your changes and imports in\n\n<link rel=\"stylesheet\" href=\"css/styles.css\">\n\nAny CSS you reference here will become part of your asset pipeline and benefit\nfrom postCSS/CSSNext and autoprefixer.\n\n */\n\n/* @import 'filename.css';  */\n\n/* @import 'main.css'  */"],"sourceRoot":""}]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Bold.ttf";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Bold.woff";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Bold.woff2";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Light.ttf";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Light.woff";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Light.woff2";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Medium.ttf";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Medium.woff";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Medium.woff2";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Regular.ttf";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Regular.woff";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Regular.woff2";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Thin.ttf";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Thin.woff";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../fonts/Roboto-Thin.woff2";

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_materialize_css_dist_css_materialize_min_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_materialize_css_dist_css_materialize_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_materialize_css_dist_css_materialize_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_styles_css__);


// export for others scripts to use
window.$ = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a;
window.jQuery = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a; // Doesn't seem to work?



// import '../../node_modules/materialize-css/dist/js/materialize.js';
// BUG: https://github.com/InfomediaLtd/angular2-materialize/issues/20



console.log("App.js loaded");

(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
  }); // end of document ready
})(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a); // end of jQuery name space


// if (window.$) {  
//         // jQuery is loaded
//         alert("Yeah!");
// }

// $( document ).ready(function() {
//     console.log( "ready!" );
//     $('h4').addClass("blue");
//         $('.button-collapse').sideNav();

// });

// setTimeout(function(){ 
// $('h4').addClass("blue");
// }, 200);

/***/ })
],[27]);
//# sourceMappingURL=app.bundle.js.map