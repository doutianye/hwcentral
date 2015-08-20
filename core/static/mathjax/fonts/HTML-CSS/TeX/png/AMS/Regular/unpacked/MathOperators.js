/*************************************************************
 *
 *  MathJax/fonts/HTML-CSS/TeX/png/AMS/Regular/MathOperators.js
 *
 *  Defines the image size data needed for the HTML-CSS OutputJax
 *  to display mathematics using fallback images when the fonts
 *  are not availble to the client browser.
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright (c) 2009-2013 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.OutputJax["HTML-CSS"].defineImageData({
    "MathJax_AMS": {
        0x2201: [  // COMPLEMENT
            [3, 6, 0], [4, 7, 0], [5, 9, 0], [6, 11, 1], [7, 13, 1], [8, 16, 1], [9, 18, 1], [11, 21, 1],
            [13, 25, 1], [15, 29, 1], [18, 35, 1], [21, 41, 1], [25, 49, 2], [30, 58, 2]
        ],
        0x2204: [  // THERE DOES NOT EXIST
            [4, 8, 2], [4, 10, 2], [5, 11, 2], [6, 12, 2], [7, 15, 3], [9, 18, 3], [10, 22, 4], [12, 24, 4],
            [14, 29, 5], [17, 35, 6], [20, 41, 7], [24, 48, 8], [28, 57, 9], [33, 68, 11]
        ],
        0x2205: [  // EMPTY SET
            [5, 4, 0], [6, 5, 0], [8, 6, 0], [9, 7, 0], [11, 8, 0], [12, 10, 0], [14, 12, 0], [17, 15, 1],
            [20, 18, 1], [24, 21, 1], [29, 24, 1], [34, 29, 1], [40, 34, 1], [48, 40, 1]
        ],
        0x220D: [  // SMALL CONTAINS AS MEMBER
            [3, 4, 0], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [9, 10, 1], [11, 12, 1],
            [13, 14, 1], [16, 16, 1], [18, 19, 1], [22, 22, 1], [26, 26, 1], [31, 30, 1]
        ],
        0x2212: [  // MINUS SIGN
            [3, 1, -1], [4, 1, -2], [5, 1, -2], [5, 1, -2], [6, 1, -3], [7, 1, -4], [9, 2, -4], [10, 2, -5],
            [12, 2, -6], [14, 2, -7], [17, 2, -9], [20, 3, -10], [23, 3, -12], [28, 3, -15]
        ],
        0x2214: [  // DOT PLUS
            [5, 7, 1], [6, 8, 1], [8, 9, 1], [9, 11, 2], [10, 13, 2], [12, 15, 2], [14, 17, 2], [17, 21, 3],
            [20, 25, 3], [24, 30, 4], [28, 34, 4], [34, 41, 5], [40, 49, 6], [48, 58, 7]
        ],
        0x2216: [  // SET MINUS
            [5, 4, 1], [6, 5, 1], [7, 6, 1], [9, 7, 1], [10, 7, 1], [12, 9, 1], [14, 10, 1], [16, 11, 1],
            [19, 13, 1], [23, 16, 1], [27, 18, 1], [32, 22, 2], [38, 26, 2], [46, 31, 2]
        ],
        0x221D: [  // PROPORTIONAL TO
            [5, 4, 0], [7, 4, 0], [7, 5, 0], [9, 6, 0], [11, 7, 0], [13, 8, 0], [15, 9, 0], [17, 11, 0],
            [21, 14, 0], [24, 16, 0], [29, 18, -1], [34, 21, -1], [40, 26, -1], [48, 31, -1]
        ],
        0x2220: [  // ANGLE
            [5, 5, 0], [6, 6, 0], [7, 7, 0], [8, 9, 0], [10, 10, 0], [12, 12, 0], [13, 14, 0], [16, 17, 0],
            [19, 20, 0], [22, 23, 0], [27, 28, 0], [31, 33, 0], [37, 39, 0], [44, 46, 0]
        ],
        0x2221: [  // MEASURED ANGLE
            [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 10, 1], [10, 11, 1], [12, 13, 1], [14, 15, 1], [16, 18, 1],
            [19, 21, 1], [23, 25, 1], [27, 29, 1], [32, 35, 1], [38, 42, 2], [45, 49, 2]
        ],
        0x2222: [  // SPHERICAL ANGLE
            [5, 5, 1], [6, 6, 1], [7, 7, 1], [8, 8, 1], [10, 9, 1], [12, 11, 1], [13, 12, 1], [16, 15, 2],
            [19, 18, 2], [22, 21, 2], [27, 24, 2], [31, 29, 3], [37, 34, 3], [44, 41, 4]
        ],
        0x2223: [  // DIVIDES
            [1, 4, 1], [1, 5, 1], [2, 6, 1], [2, 7, 1], [2, 7, 1], [2, 9, 1], [3, 10, 1], [4, 11, 1],
            [4, 13, 1], [5, 16, 1], [6, 18, 1], [7, 22, 2], [8, 26, 2], [9, 31, 2]
        ],
        0x2224: [  // DOES NOT DIVIDE
            [3, 8, 2], [4, 10, 3], [4, 11, 3], [5, 12, 3], [5, 15, 4], [7, 18, 5], [7, 20, 5], [9, 24, 6],
            [10, 28, 7], [11, 34, 9], [14, 40, 10], [16, 47, 12], [19, 56, 14], [22, 67, 17]
        ],
        0x2225: [  // PARALLEL TO
            [3, 4, 1], [3, 5, 1], [4, 6, 1], [4, 7, 1], [5, 7, 1], [6, 9, 1], [7, 10, 1], [8, 11, 1],
            [10, 13, 1], [11, 16, 1], [13, 18, 1], [16, 23, 2], [19, 26, 2], [22, 31, 2]
        ],
        0x2226: [  // NOT PARALLEL TO
            [5, 8, 2], [6, 10, 3], [7, 11, 3], [8, 12, 3], [9, 15, 4], [10, 18, 5], [11, 20, 5], [14, 24, 6],
            [16, 28, 7], [18, 34, 9], [22, 40, 10], [26, 47, 12], [31, 56, 14], [36, 67, 17]
        ],
        0x2234: [  // THEREFORE
            [5, 5, 1], [6, 5, 1], [7, 6, 1], [8, 7, 1], [9, 9, 2], [11, 10, 2], [13, 12, 2], [15, 13, 2],
            [18, 17, 3], [22, 19, 3], [26, 23, 4], [30, 26, 4], [36, 32, 5], [43, 37, 6]
        ],
        0x2235: [  // BECAUSE
            [5, 5, 1], [6, 5, 1], [7, 6, 1], [8, 7, 1], [9, 9, 2], [11, 10, 2], [13, 12, 2], [15, 13, 2],
            [18, 17, 3], [22, 19, 3], [26, 23, 4], [30, 26, 4], [36, 32, 5], [43, 37, 6]
        ],
        0x223C: [  // TILDE OPERATOR
            [5, 2, -1], [6, 2, -1], [8, 3, -1], [9, 4, -1], [10, 5, -1], [13, 5, -2], [15, 6, -2], [17, 6, -3],
            [20, 8, -3], [24, 9, -4], [29, 10, -5], [34, 11, -6], [40, 14, -7], [48, 17, -8]
        ],
        0x223D: [  // REVERSED TILDE
            [5, 2, -1], [6, 3, -1], [8, 3, -1], [9, 4, -1], [10, 4, -2], [12, 5, -2], [15, 6, -2], [17, 6, -3],
            [20, 8, -3], [24, 9, -4], [29, 10, -5], [34, 12, -6], [40, 14, -7], [48, 17, -8]
        ],
        0x2241: [  // stix-not, vert, similar
            [5, 4, 0], [6, 4, 0], [8, 5, 0], [9, 6, 0], [10, 7, 0], [13, 8, 0], [15, 10, 0], [17, 11, 0],
            [20, 13, 0], [24, 15, -1], [29, 18, -1], [34, 21, -1], [40, 25, -1], [48, 29, -2]
        ],
        0x2242: [  // MINUS TILDE
            [5, 4, 0], [6, 4, 0], [8, 5, 0], [9, 6, 0], [10, 7, 0], [12, 8, 0], [15, 9, 0], [17, 11, 0],
            [20, 13, 0], [24, 15, -1], [29, 18, -1], [34, 21, -1], [40, 25, -1], [48, 29, -2]
        ],
        0x2246: [  // APPROXIMATELY BUT NOT ACTUALLY EQUAL TO
            [5, 7, 2], [6, 8, 2], [8, 9, 2], [9, 10, 2], [10, 12, 3], [13, 14, 3], [15, 17, 4], [17, 20, 4],
            [20, 23, 5], [24, 28, 6], [29, 33, 7], [34, 39, 8], [40, 46, 9], [48, 54, 11]
        ],
        0x2248: [  // ALMOST EQUAL TO
            [5, 4, 0], [6, 4, 0], [8, 5, 0], [9, 6, 0], [11, 7, 0], [13, 8, 0], [15, 10, 0], [17, 11, -1],
            [21, 13, -1], [24, 15, -1], [29, 18, -1], [34, 21, -2], [40, 25, -2], [48, 29, -3]
        ],
        0x224A: [  // ALMOST EQUAL OR EQUAL TO
            [5, 5, 1], [7, 6, 1], [8, 7, 1], [9, 8, 1], [11, 9, 1], [13, 11, 1], [15, 13, 1], [17, 15, 1],
            [21, 18, 2], [24, 22, 2], [29, 25, 2], [34, 29, 2], [41, 36, 3], [48, 42, 3]
        ],
        0x224E: [  // GEOMETRICALLY EQUIVALENT TO
            [5, 4, 0], [6, 4, 0], [8, 5, 0], [9, 6, 0], [10, 7, 0], [12, 8, 0], [14, 10, 0], [17, 12, 0],
            [20, 14, 0], [24, 17, 0], [29, 20, 0], [34, 23, 0], [40, 28, 0], [48, 33, 0]
        ],
        0x224F: [  // DIFFERENCE BETWEEN
            [5, 3, -1], [6, 3, -1], [8, 4, -1], [9, 5, -1], [10, 5, -2], [12, 6, -2], [14, 8, -2], [17, 9, -3],
            [20, 11, -3], [24, 13, -4], [29, 15, -5], [34, 17, -6], [40, 21, -7], [48, 25, -8]
        ],
        0x2251: [  // GEOMETRICALLY EQUAL TO
            [5, 6, 1], [6, 7, 1], [8, 8, 2], [9, 10, 2], [10, 11, 2], [12, 13, 2], [15, 15, 3], [17, 18, 3],
            [20, 20, 3], [24, 25, 4], [29, 29, 5], [34, 34, 5], [40, 40, 6], [48, 49, 8]
        ],
        0x2252: [  // APPROXIMATELY EQUAL TO OR THE IMAGE OF
            [6, 5, 1], [7, 6, 1], [8, 7, 1], [9, 10, 2], [11, 11, 2], [13, 12, 2], [15, 14, 2], [18, 17, 3],
            [22, 20, 3], [25, 24, 4], [30, 28, 4], [36, 33, 5], [43, 40, 6], [51, 47, 7]
        ],
        0x2253: [  // IMAGE OF OR APPROXIMATELY EQUAL TO
            [6, 5, 1], [7, 6, 1], [8, 7, 1], [9, 10, 2], [11, 11, 2], [13, 12, 2], [15, 14, 2], [18, 17, 3],
            [22, 20, 3], [25, 24, 4], [30, 28, 4], [36, 33, 5], [43, 40, 6], [51, 47, 7]
        ],
        0x2256: [  // RING IN EQUAL TO
            [5, 2, -1], [6, 2, -1], [8, 3, -1], [9, 4, -1], [10, 3, -2], [12, 4, -2], [15, 5, -2], [17, 6, -3],
            [20, 8, -3], [24, 9, -4], [29, 10, -5], [34, 11, -6], [40, 14, -7], [48, 17, -8]
        ],
        0x2257: [  // RING EQUAL TO
            [5, 4, -1], [6, 5, -1], [8, 6, -1], [9, 8, -1], [10, 8, -2], [12, 10, -2], [15, 12, -2], [17, 14, -3],
            [20, 17, -3], [24, 20, -4], [29, 24, -5], [34, 28, -6], [40, 33, -7], [48, 40, -8]
        ],
        0x225C: [  // DELTA EQUAL TO
            [5, 5, -1], [6, 7, -1], [8, 8, -1], [9, 9, -1], [10, 10, -2], [12, 13, -2], [15, 15, -2], [17, 17, -3],
            [20, 21, -3], [24, 25, -4], [29, 29, -5], [34, 34, -6], [40, 41, -7], [48, 49, -8]
        ],
        0x2266: [  // LESS-THAN OVER EQUAL TO
            [5, 8, 2], [6, 9, 2], [8, 10, 2], [9, 11, 2], [10, 14, 3], [12, 16, 3], [15, 19, 4], [17, 22, 4],
            [20, 26, 5], [24, 31, 6], [28, 37, 7], [34, 44, 9], [40, 52, 10], [48, 62, 12]
        ],
        0x2267: [  // GREATER-THAN OVER EQUAL TO
            [5, 8, 2], [6, 9, 2], [7, 10, 2], [9, 11, 2], [10, 14, 3], [12, 16, 3], [14, 19, 4], [17, 22, 4],
            [20, 26, 5], [23, 31, 6], [28, 37, 7], [33, 44, 9], [39, 52, 10], [46, 62, 12]
        ],
        0x2268: [  // stix-less, vert, not double equals
            [5, 8, 2], [6, 10, 3], [7, 11, 3], [9, 13, 4], [10, 15, 4], [12, 18, 5], [14, 21, 6], [17, 25, 7],
            [20, 29, 8], [23, 35, 10], [28, 42, 12], [33, 49, 14], [39, 58, 16], [46, 69, 19]
        ],
        0x2269: [  // stix-gt, vert, not double equals
            [5, 8, 2], [6, 10, 3], [7, 11, 3], [9, 13, 4], [10, 15, 4], [12, 18, 5], [14, 21, 6], [17, 25, 7],
            [20, 29, 8], [23, 35, 10], [28, 42, 12], [33, 49, 14], [39, 58, 16], [46, 69, 19]
        ],
        0x226C: [  // BETWEEN
            [3, 8, 2], [4, 10, 3], [5, 11, 3], [5, 12, 3], [6, 15, 4], [8, 18, 5], [9, 20, 5], [10, 24, 6],
            [12, 28, 7], [14, 34, 9], [17, 40, 10], [20, 47, 12], [24, 56, 14], [28, 67, 17]
        ],
        0x226E: [  // stix-not, vert, less-than
            [5, 8, 2], [6, 9, 2], [7, 10, 3], [9, 12, 3], [10, 14, 4], [12, 16, 4], [14, 19, 5], [17, 22, 5],
            [20, 26, 6], [23, 31, 7], [28, 37, 9], [33, 43, 10], [39, 52, 12], [46, 61, 14]
        ],
        0x226F: [  // stix-not, vert, greater-than
            [5, 8, 2], [6, 9, 2], [7, 10, 3], [9, 12, 3], [10, 14, 4], [12, 16, 4], [14, 19, 5], [17, 22, 5],
            [20, 26, 6], [23, 31, 7], [28, 37, 9], [33, 43, 10], [39, 52, 12], [46, 61, 14]
        ],
        0x2270: [  // stix-not, vert, less-than-or-equal
            [5, 9, 3], [6, 10, 3], [7, 11, 3], [9, 14, 4], [10, 17, 5], [12, 20, 6], [14, 22, 6], [17, 26, 7],
            [20, 32, 9], [24, 38, 11], [28, 44, 12], [33, 53, 15], [39, 62, 17], [46, 74, 21]
        ],
        0x2271: [  // stix-not, vert, greater-than-or-equal
            [5, 9, 3], [6, 10, 3], [7, 11, 3], [9, 14, 4], [10, 17, 5], [12, 20, 6], [14, 22, 6], [17, 26, 7],
            [20, 32, 9], [23, 38, 11], [28, 44, 12], [33, 53, 15], [39, 62, 17], [46, 74, 21]
        ],
        0x2272: [  // stix-less-than or (contour) similar
            [5, 8, 2], [6, 9, 2], [7, 11, 3], [9, 12, 3], [10, 14, 3], [12, 17, 4], [14, 20, 5], [17, 23, 6],
            [20, 28, 7], [24, 33, 8], [29, 38, 9], [34, 45, 11], [40, 54, 13], [48, 64, 15]
        ],
        0x2273: [  // stix-greater-than or (contour) similar
            [5, 8, 2], [6, 9, 2], [7, 10, 2], [9, 12, 3], [10, 14, 3], [12, 17, 4], [14, 20, 5], [17, 23, 6],
            [20, 28, 7], [24, 33, 8], [29, 38, 9], [34, 45, 11], [40, 54, 13], [48, 64, 15]
        ],
        0x2276: [  // LESS-THAN OR GREATER-THAN
            [6, 7, 2], [7, 9, 3], [8, 10, 3], [9, 11, 3], [11, 14, 4], [13, 17, 5], [15, 19, 5], [18, 22, 6],
            [21, 26, 7], [25, 32, 9], [29, 37, 10], [35, 44, 12], [41, 52, 14], [49, 62, 17]
        ],
        0x2277: [  // GREATER-THAN OR LESS-THAN
            [5, 7, 2], [6, 9, 3], [7, 10, 3], [9, 11, 3], [10, 14, 4], [12, 17, 5], [14, 19, 5], [17, 22, 6],
            [20, 26, 7], [23, 32, 9], [28, 37, 10], [33, 44, 12], [39, 52, 14], [46, 62, 17]
        ],
        0x227C: [  // PRECEDES OR EQUAL TO
            [5, 6, 2], [6, 7, 2], [7, 8, 2], [9, 9, 2], [10, 12, 3], [12, 13, 3], [14, 15, 3], [16, 18, 4],
            [19, 22, 5], [23, 25, 5], [27, 29, 6], [32, 34, 7], [38, 42, 9], [46, 49, 10]
        ],
        0x227D: [  // SUCCEEDS OR EQUAL TO
            [5, 6, 2], [6, 7, 2], [7, 8, 2], [9, 9, 2], [10, 11, 3], [12, 13, 3], [14, 16, 4], [17, 18, 4],
            [20, 21, 5], [23, 26, 6], [28, 30, 7], [33, 35, 8], [39, 42, 9], [46, 50, 11]
        ],
        0x227E: [  // PRECEDES OR EQUIVALENT TO
            [5, 8, 2], [6, 9, 2], [7, 11, 3], [9, 12, 3], [10, 14, 3], [12, 17, 4], [14, 20, 5], [17, 23, 6],
            [20, 28, 7], [24, 33, 8], [29, 38, 9], [34, 45, 11], [40, 54, 13], [48, 64, 15]
        ],
        0x227F: [  // SUCCEEDS OR EQUIVALENT TO
            [5, 8, 2], [6, 9, 2], [7, 11, 3], [9, 12, 3], [10, 14, 3], [12, 17, 4], [14, 20, 5], [17, 23, 6],
            [20, 28, 7], [24, 33, 8], [29, 38, 9], [34, 45, 11], [40, 54, 13], [48, 65, 16]
        ],
        0x2280: [  // DOES NOT PRECEDE
            [5, 8, 2], [6, 9, 2], [7, 10, 3], [9, 12, 3], [10, 13, 3], [12, 16, 4], [14, 19, 5], [17, 22, 5],
            [20, 26, 6], [23, 31, 7], [28, 37, 9], [33, 43, 10], [39, 52, 12], [46, 61, 14]
        ],
        0x2281: [  // stix-not (vert) succeeds
            [5, 7, 2], [6, 8, 2], [7, 10, 3], [9, 12, 3], [10, 14, 4], [12, 16, 4], [14, 19, 5], [17, 22, 5],
            [20, 26, 6], [23, 31, 7], [28, 37, 9], [33, 43, 10], [39, 51, 12], [46, 61, 14]
        ],
        0x2288: [  // stix-/nsubseteq N: not (vert) subset, equals
            [5, 9, 3], [6, 10, 3], [7, 12, 3], [9, 14, 4], [10, 17, 5], [12, 20, 6], [14, 22, 6], [17, 26, 7],
            [20, 32, 9], [23, 38, 11], [28, 44, 12], [33, 53, 15], [39, 62, 17], [46, 74, 21]
        ],
        0x2289: [  // stix-/nsupseteq N: not (vert) superset, equals
            [5, 9, 3], [6, 10, 3], [7, 11, 3], [8, 14, 4], [10, 17, 5], [12, 19, 6], [14, 22, 6], [17, 26, 7],
            [20, 32, 9], [23, 37, 11], [28, 44, 12], [33, 53, 15], [39, 62, 17], [46, 73, 20]
        ],
        0x228A: [  // stix-subset, not equals, variant
            [5, 7, 2], [6, 8, 2], [7, 10, 3], [9, 11, 3], [10, 13, 4], [12, 16, 5], [14, 18, 5], [17, 21, 6],
            [20, 25, 7], [23, 31, 9], [28, 36, 10], [33, 42, 12], [39, 50, 14], [46, 59, 17]
        ],
        0x228B: [  // stix-superset, not equals, variant
            [5, 7, 2], [6, 8, 2], [7, 10, 3], [8, 11, 3], [10, 13, 4], [12, 16, 5], [14, 18, 5], [17, 21, 6],
            [20, 25, 7], [23, 30, 9], [28, 35, 10], [33, 42, 12], [39, 50, 14], [46, 59, 17]
        ],
        0x228F: [  // SQUARE IMAGE OF
            [5, 5, 1], [6, 6, 1], [7, 7, 1], [9, 8, 1], [10, 9, 1], [12, 10, 1], [14, 12, 1], [17, 14, 1],
            [19, 17, 2], [23, 20, 2], [28, 24, 2], [33, 28, 2], [39, 33, 3], [46, 39, 3]
        ],
        0x2290: [  // SQUARE ORIGINAL OF
            [5, 5, 1], [6, 6, 1], [7, 7, 1], [9, 8, 1], [10, 9, 1], [12, 10, 1], [14, 12, 1], [17, 14, 1],
            [20, 17, 2], [24, 20, 2], [28, 24, 2], [34, 28, 2], [40, 33, 3], [47, 39, 3]
        ],
        0x229A: [  // CIRCLED RING OPERATOR
            [5, 6, 1], [6, 6, 1], [7, 7, 1], [9, 8, 1], [10, 10, 1], [12, 12, 2], [14, 14, 2], [17, 16, 2],
            [20, 20, 3], [24, 23, 3], [29, 27, 4], [34, 31, 4], [40, 38, 5], [48, 45, 6]
        ],
        0x229B: [  // CIRCLED ASTERISK OPERATOR
            [5, 6, 1], [6, 6, 1], [7, 7, 1], [9, 8, 1], [10, 10, 1], [12, 12, 2], [14, 14, 2], [17, 16, 2],
            [20, 20, 3], [24, 23, 3], [29, 27, 4], [34, 31, 4], [40, 38, 5], [48, 45, 6]
        ],
        0x229D: [  // CIRCLED DASH
            [5, 6, 1], [6, 6, 1], [7, 7, 1], [9, 8, 1], [10, 10, 1], [12, 12, 2], [14, 14, 2], [17, 16, 2],
            [20, 20, 3], [24, 23, 3], [29, 27, 4], [34, 31, 4], [40, 38, 5], [48, 45, 6]
        ],
        0x229E: [  // SQUARED PLUS
            [5, 5, 0], [6, 6, 0], [8, 7, 0], [9, 8, 0], [11, 10, 0], [13, 12, 0], [15, 14, 0], [17, 16, 0],
            [20, 20, 0], [24, 23, 0], [29, 27, 0], [34, 32, 0], [41, 39, 0], [48, 46, 0]
        ],
        0x229F: [  // SQUARED MINUS
            [5, 5, 0], [6, 6, 0], [7, 7, 0], [9, 8, 0], [10, 10, 0], [12, 12, 0], [14, 14, 0], [17, 16, 0],
            [21, 20, 0], [24, 23, 0], [29, 27, 0], [34, 32, 0], [40, 39, 0], [48, 46, 0]
        ],
        0x22A0: [  // SQUARED TIMES
            [5, 5, 0], [6, 6, 0], [7, 7, 0], [9, 8, 0], [10, 10, 0], [12, 12, 0], [14, 14, 0], [17, 16, 0],
            [21, 20, 0], [24, 23, 0], [29, 27, 0], [34, 32, 0], [40, 39, 0], [48, 46, 0]
        ],
        0x22A1: [  // SQUARED DOT OPERATOR
            [5, 5, 0], [6, 6, 0], [7, 7, 0], [9, 8, 0], [10, 10, 0], [12, 12, 0], [14, 14, 0], [17, 16, 0],
            [21, 20, 0], [24, 23, 0], [29, 27, 0], [34, 32, 0], [40, 39, 0], [48, 46, 0]
        ],
        0x22A8: [  // TRUE
            [4, 5, 0], [5, 6, 0], [6, 7, 0], [7, 9, 0], [8, 10, 0], [10, 12, 0], [11, 14, 0], [13, 17, 0],
            [16, 20, 0], [19, 23, 0], [22, 28, 0], [26, 33, 0], [31, 39, 0], [37, 46, 0]
        ],
        0x22A9: [  // FORCES
            [5, 5, 0], [6, 6, 0], [7, 7, 0], [8, 9, 0], [10, 10, 0], [12, 12, 0], [14, 14, 0], [16, 17, 0],
            [19, 20, 0], [22, 23, 0], [26, 28, 0], [31, 33, 0], [37, 39, 0], [44, 46, 0]
        ],
        0x22AA: [  // TRIPLE VERTICAL BAR RIGHT TURNSTILE
            [6, 5, 0], [7, 6, 0], [9, 7, 0], [10, 9, 0], [12, 10, 0], [14, 12, 0], [17, 14, 0], [19, 17, 0],
            [24, 20, 0], [28, 23, 0], [33, 28, 0], [39, 33, 0], [46, 39, 0], [55, 46, 0]
        ],
        0x22AC: [  // DOES NOT PROVE
            [5, 5, 0], [6, 7, 1], [7, 8, 1], [8, 10, 1], [9, 11, 1], [11, 13, 1], [13, 15, 1], [15, 18, 1],
            [18, 21, 1], [21, 24, 1], [25, 29, 1], [30, 34, 1], [35, 40, 1], [41, 47, 1]
        ],
        0x22AD: [  // NOT TRUE
            [5, 5, 0], [6, 7, 1], [7, 8, 1], [8, 10, 1], [9, 11, 1], [11, 13, 1], [13, 15, 1], [15, 18, 1],
            [18, 21, 1], [21, 24, 1], [25, 29, 1], [29, 34, 1], [35, 40, 1], [41, 47, 1]
        ],
        0x22AE: [  // DOES NOT FORCE
            [6, 5, 0], [7, 7, 1], [8, 8, 1], [9, 10, 1], [11, 11, 1], [13, 13, 1], [15, 15, 1], [18, 18, 1],
            [21, 21, 1], [24, 24, 1], [29, 29, 1], [35, 34, 1], [41, 40, 1], [48, 47, 1]
        ],
        0x22AF: [  // NEGATED DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE
            [6, 5, 0], [7, 7, 1], [8, 8, 1], [9, 10, 1], [11, 11, 1], [13, 13, 1], [16, 15, 1], [18, 18, 1],
            [21, 21, 1], [24, 24, 1], [30, 29, 1], [35, 34, 1], [41, 40, 1], [49, 47, 1]
        ],
        0x22B2: [  // NORMAL SUBGROUP OF
            [5, 5, 1], [6, 6, 1], [7, 7, 1], [8, 8, 1], [10, 9, 1], [12, 10, 1], [14, 12, 1], [16, 14, 1],
            [20, 17, 2], [23, 20, 2], [28, 24, 2], [33, 28, 2], [39, 33, 3], [46, 39, 3]
        ],
        0x22B3: [  // CONTAINS AS NORMAL SUBGROUP
            [5, 5, 1], [6, 6, 1], [7, 7, 1], [9, 8, 1], [10, 9, 1], [12, 10, 1], [14, 12, 1], [17, 14, 1],
            [20, 17, 2], [23, 20, 2], [28, 24, 2], [33, 28, 2], [39, 33, 3], [46, 39, 3]
        ],
        0x22B4: [  // NORMAL SUBGROUP OF OR EQUAL TO
            [5, 6, 1], [6, 7, 1], [7, 9, 2], [9, 10, 2], [10, 11, 2], [12, 14, 3], [14, 16, 3], [17, 18, 3],
            [20, 22, 4], [23, 26, 5], [28, 31, 6], [33, 37, 7], [39, 44, 8], [46, 52, 10]
        ],
        0x22B5: [  // CONTAINS AS NORMAL SUBGROUP OR EQUAL TO
            [5, 6, 1], [6, 7, 1], [7, 9, 2], [9, 10, 2], [10, 11, 2], [12, 14, 3], [14, 16, 3], [17, 18, 3],
            [20, 22, 4], [23, 26, 5], [28, 31, 6], [33, 37, 7], [39, 44, 8], [46, 52, 10]
        ],
        0x22B8: [  // MULTIMAP
            [8, 3, 0], [9, 4, 0], [11, 3, -1], [13, 4, -1], [15, 5, -1], [18, 6, -1], [21, 6, -2], [25, 8, -2],
            [30, 10, -2], [35, 11, -3], [42, 13, -3], [50, 15, -4], [59, 18, -5], [70, 21, -6]
        ],
        0x22BA: [  // INTERCALATE
            [4, 5, 2], [5, 6, 2], [5, 8, 3], [6, 8, 3], [7, 9, 3], [9, 12, 4], [10, 13, 4], [12, 15, 5],
            [14, 18, 6], [17, 23, 8], [20, 26, 9], [24, 31, 10], [28, 36, 12], [33, 43, 14]
        ],
        0x22BB: [  // XOR
            [4, 5, 0], [5, 6, 0], [6, 8, 0], [7, 9, 0], [8, 10, 0], [10, 12, 0], [11, 14, 0], [13, 17, 0],
            [16, 20, 0], [19, 24, 0], [22, 29, 0], [26, 34, 0], [31, 40, 0], [37, 48, 0]
        ],
        0x22BC: [  // NAND
            [4, 5, 0], [5, 6, 0], [6, 8, 1], [7, 9, 0], [8, 10, 0], [10, 12, 0], [11, 14, 0], [13, 17, 0],
            [16, 20, 0], [19, 25, 1], [22, 29, 0], [26, 35, 1], [31, 41, 1], [37, 49, 1]
        ],
        0x22C5: [  // DOT OPERATOR
            [2, 2, 0], [2, 2, 0], [3, 2, 0], [3, 3, 0], [4, 3, 0], [4, 4, 0], [5, 4, 0], [6, 5, 0],
            [7, 6, 0], [8, 7, 0], [9, 8, 0], [11, 9, 0], [13, 11, 0], [15, 13, 0]
        ],
        0x22C7: [  // DIVISION TIMES
            [5, 5, 1], [6, 6, 1], [8, 7, 1], [9, 8, 1], [10, 9, 1], [12, 11, 1], [15, 12, 1], [17, 15, 2],
            [20, 18, 2], [24, 20, 2], [29, 24, 2], [34, 29, 3], [40, 34, 3], [48, 39, 3]
        ],
        0x22C9: [  // LEFT NORMAL FACTOR SEMIDIRECT PRODUCT
            [5, 4, 0], [6, 5, 0], [7, 5, 0], [8, 6, 0], [9, 7, 0], [11, 9, 0], [13, 10, 0], [15, 12, 0],
            [18, 14, 0], [21, 17, 0], [25, 20, 0], [30, 23, 0], [35, 28, 0], [42, 33, 0]
        ],
        0x22CA: [  // RIGHT NORMAL FACTOR SEMIDIRECT PRODUCT
            [5, 4, 0], [6, 5, 0], [6, 5, 0], [8, 6, 0], [9, 7, 0], [11, 9, 0], [13, 10, 0], [15, 12, 0],
            [18, 14, 0], [21, 17, 0], [25, 20, 0], [30, 23, 0], [35, 28, 0], [42, 33, 0]
        ],
        0x22CB: [  // LEFT SEMIDIRECT PRODUCT
            [5, 6, 1], [6, 7, 1], [8, 8, 1], [9, 10, 1], [10, 11, 1], [12, 13, 1], [15, 15, 1], [17, 18, 1],
            [20, 21, 1], [24, 24, 1], [29, 29, 1], [34, 35, 2], [40, 41, 2], [48, 48, 2]
        ],
        0x22CC: [  // RIGHT SEMIDIRECT PRODUCT
            [5, 6, 1], [6, 7, 1], [8, 8, 1], [9, 10, 1], [10, 11, 1], [12, 13, 1], [14, 15, 1], [17, 18, 1],
            [20, 21, 1], [24, 24, 1], [29, 29, 1], [34, 35, 2], [40, 41, 2], [48, 48, 2]
        ],
        0x22CD: [  // REVERSED TILDE EQUALS
            [5, 4, 0], [6, 4, 0], [8, 5, 0], [9, 6, 0], [10, 7, 0], [12, 8, 0], [15, 10, 0], [17, 10, -1],
            [20, 12, -1], [24, 15, -1], [29, 18, -1], [34, 21, -1], [40, 25, -1], [48, 29, -2]
        ],
        0x22CE: [  // CURLY LOGICAL OR
            [5, 5, 1], [6, 6, 1], [7, 7, 1], [8, 8, 1], [10, 10, 1], [12, 11, 1], [14, 13, 1], [16, 15, 1],
            [19, 17, 1], [23, 20, 1], [27, 24, 1], [32, 28, 1], [38, 34, 2], [45, 41, 2]
        ],
        0x22CF: [  // CURLY LOGICAL AND
            [5, 5, 1], [6, 6, 1], [7, 7, 1], [8, 8, 1], [10, 9, 1], [12, 11, 1], [14, 13, 1], [16, 15, 1],
            [19, 17, 1], [23, 20, 1], [27, 24, 1], [32, 29, 2], [38, 34, 2], [45, 40, 2]
        ],
        0x22D0: [  // DOUBLE SUBSET
            [5, 5, 1], [6, 6, 1], [7, 7, 1], [8, 8, 1], [10, 9, 1], [12, 10, 1], [14, 12, 1], [16, 14, 1],
            [19, 17, 2], [23, 20, 2], [27, 23, 2], [33, 27, 2], [39, 33, 3], [46, 39, 3]
        ],
        0x22D1: [  // DOUBLE SUPERSET
            [5, 5, 1], [6, 6, 1], [7, 7, 1], [8, 8, 1], [10, 9, 1], [12, 10, 1], [14, 12, 1], [17, 14, 1],
            [20, 17, 2], [23, 20, 2], [28, 24, 2], [33, 28, 2], [39, 33, 3], [46, 39, 3]
        ],
        0x22D2: [  // DOUBLE INTERSECTION
            [5, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [9, 10, 1], [10, 11, 1], [12, 13, 1], [14, 15, 1],
            [17, 18, 1], [21, 21, 1], [24, 25, 1], [29, 30, 2], [34, 36, 2], [41, 42, 2]
        ],
        0x22D3: [  // DOUBLE UNION
            [5, 5, 1], [6, 6, 1], [6, 7, 1], [8, 8, 1], [9, 10, 1], [11, 11, 1], [12, 13, 1], [14, 15, 1],
            [18, 18, 1], [21, 21, 1], [24, 25, 1], [29, 29, 1], [34, 36, 2], [41, 42, 2]
        ],
        0x22D4: [  // PITCHFORK
            [5, 7, 1], [6, 8, 1], [6, 9, 1], [8, 10, 1], [9, 12, 1], [11, 14, 1], [12, 16, 1], [15, 19, 1],
            [18, 22, 1], [21, 26, 1], [24, 30, 1], [29, 37, 2], [34, 43, 2], [41, 51, 2]
        ],
        0x22D6: [  // LESS-THAN WITH DOT
            [5, 5, 1], [6, 6, 1], [7, 7, 1], [9, 8, 1], [10, 9, 1], [12, 10, 1], [14, 12, 1], [17, 14, 1],
            [20, 17, 2], [23, 20, 2], [28, 24, 2], [33, 28, 2], [39, 33, 3], [46, 39, 3]
        ],
        0x22D7: [  // GREATER-THAN WITH DOT
            [5, 5, 1], [6, 6, 1], [7, 7, 1], [9, 8, 1], [10, 9, 1], [12, 10, 1], [14, 12, 1], [17, 14, 1],
            [20, 17, 2], [23, 20, 2], [27, 24, 2], [33, 28, 2], [39, 33, 3], [46, 39, 3]
        ],
        0x22D8: [  // VERY MUCH LESS-THAN
            [9, 5, 1], [11, 6, 1], [13, 7, 1], [15, 8, 1], [18, 9, 1], [22, 12, 2], [25, 14, 2], [30, 16, 2],
            [36, 18, 2], [42, 22, 3], [50, 26, 3], [60, 31, 4], [71, 36, 4], [84, 43, 5]
        ],
        0x22D9: [  // VERY MUCH GREATER-THAN
            [9, 5, 1], [11, 6, 1], [13, 7, 1], [16, 8, 1], [18, 9, 1], [22, 12, 2], [25, 14, 2], [30, 16, 2],
            [36, 18, 2], [43, 22, 3], [51, 26, 3], [60, 31, 4], [71, 36, 4], [85, 43, 5]
        ],
        0x22DA: [  // stix-less, equal, slanted, greater
            [5, 10, 3], [6, 12, 4], [7, 13, 4], [8, 16, 5], [10, 19, 6], [12, 22, 7], [14, 26, 8], [16, 30, 9],
            [19, 36, 11], [23, 43, 13], [27, 50, 15], [32, 60, 18], [38, 71, 22], [45, 85, 26]
        ],
        0x22DB: [  // stix-greater, equal, slanted, less
            [5, 10, 3], [6, 12, 4], [7, 13, 4], [8, 16, 5], [10, 19, 6], [12, 22, 7], [14, 26, 8], [16, 30, 9],
            [19, 36, 11], [23, 43, 13], [27, 51, 16], [32, 60, 18], [38, 71, 22], [45, 85, 26]
        ],
        0x22DE: [  // EQUAL TO OR PRECEDES
            [5, 7, 1], [6, 8, 1], [7, 9, 1], [9, 10, 1], [10, 12, 1], [12, 14, 1], [14, 16, 1], [17, 18, 1],
            [20, 22, 1], [23, 26, 1], [28, 30, 1], [33, 35, 1], [39, 42, 1], [46, 50, 1]
        ],
        0x22DF: [  // EQUAL TO OR SUCCEEDS
            [5, 6, 0], [6, 7, 0], [7, 8, 0], [9, 9, 0], [10, 11, 0], [12, 13, 0], [14, 15, 0], [17, 18, 0],
            [20, 21, 0], [23, 25, 0], [28, 29, 0], [33, 35, 0], [39, 41, 0], [46, 49, 0]
        ],
        0x22E0: [  // stix-not (vert) precedes or contour equals
            [5, 9, 3], [6, 10, 3], [7, 11, 3], [9, 14, 4], [10, 17, 5], [12, 20, 6], [14, 22, 6], [17, 27, 7],
            [20, 32, 9], [23, 38, 11], [28, 44, 12], [33, 53, 15], [39, 62, 17], [46, 74, 21]
        ],
        0x22E1: [  // stix-not (vert) succeeds or contour equals
            [5, 9, 3], [6, 10, 3], [7, 11, 3], [9, 14, 4], [10, 17, 5], [12, 20, 6], [14, 22, 6], [17, 26, 7],
            [20, 32, 9], [23, 38, 11], [28, 44, 12], [33, 53, 15], [39, 62, 17], [46, 74, 21]
        ],
        0x22E6: [  // LESS-THAN BUT NOT EQUIVALENT TO
            [5, 9, 3], [6, 10, 3], [8, 12, 4], [9, 14, 5], [10, 16, 5], [13, 19, 6], [15, 22, 7], [17, 26, 9],
            [20, 31, 10], [24, 37, 12], [29, 44, 15], [34, 51, 17], [40, 61, 20], [48, 73, 24]
        ],
        0x22E7: [  // GREATER-THAN BUT NOT EQUIVALENT TO
            [5, 9, 3], [6, 10, 3], [8, 12, 4], [9, 14, 5], [10, 16, 5], [13, 19, 6], [15, 22, 7], [17, 26, 9],
            [20, 31, 10], [24, 37, 12], [29, 44, 15], [34, 51, 17], [40, 61, 20], [48, 73, 24]
        ],
        0x22E8: [  // PRECEDES BUT NOT EQUIVALENT TO
            [5, 9, 3], [6, 10, 3], [8, 12, 4], [9, 14, 5], [10, 16, 5], [13, 19, 6], [15, 22, 7], [17, 26, 9],
            [20, 31, 10], [24, 37, 12], [29, 43, 14], [34, 51, 17], [40, 61, 20], [48, 73, 24]
        ],
        0x22E9: [  // SUCCEEDS BUT NOT EQUIVALENT TO
            [5, 9, 3], [6, 10, 3], [8, 12, 4], [9, 14, 5], [10, 16, 5], [13, 19, 6], [15, 23, 8], [17, 26, 9],
            [20, 31, 10], [24, 37, 12], [29, 44, 15], [34, 51, 17], [40, 62, 21], [48, 73, 24]
        ],
        0x22EA: [  // NOT NORMAL SUBGROUP OF
            [5, 8, 2], [6, 9, 2], [7, 10, 3], [8, 12, 3], [10, 14, 4], [12, 16, 4], [14, 19, 5], [17, 22, 5],
            [20, 26, 6], [23, 31, 7], [28, 37, 9], [33, 43, 10], [39, 52, 12], [46, 61, 14]
        ],
        0x22EB: [  // DOES NOT CONTAIN AS NORMAL SUBGROUP
            [5, 8, 2], [6, 9, 2], [7, 10, 3], [9, 12, 3], [10, 14, 4], [12, 16, 4], [14, 19, 5], [17, 22, 5],
            [19, 26, 6], [23, 31, 7], [27, 37, 9], [33, 43, 10], [39, 52, 12], [46, 61, 14]
        ],
        0x22EC: [  // stix-not, vert, left triangle, equals
            [5, 9, 3], [6, 10, 3], [7, 11, 3], [9, 14, 4], [10, 17, 5], [12, 20, 6], [14, 22, 6], [17, 26, 7],
            [20, 32, 9], [23, 38, 11], [28, 44, 12], [33, 53, 15], [39, 62, 17], [46, 74, 21]
        ],
        0x22ED: [  // stix-not, vert, right triangle, equals
            [5, 9, 3], [6, 10, 3], [8, 11, 3], [9, 14, 4], [10, 17, 5], [12, 20, 6], [14, 22, 6], [17, 26, 7],
            [20, 32, 9], [23, 38, 11], [28, 44, 12], [33, 53, 15], [39, 62, 17], [46, 74, 21]
        ]
    }
});

MathJax.Ajax.loadComplete(MathJax.OutputJax["HTML-CSS"].imgDir + "/AMS/Regular" +
    MathJax.OutputJax["HTML-CSS"].imgPacked + "/MathOperators.js");
