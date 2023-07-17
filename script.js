
    const textArea = document.getElementById("textArea");

    // Define the new set of keywords and their corresponding responses
    const keywords = [
      
       {
        word: "if",
        response: "()\n{\n\n}",
      },
     {
        word: "while",
        response: "()\n{\n\n}",
      },
      {
        word: "//variable",
        response: "\nint a=0;",
      },
      {
        word: "//linkedlist",
        response: "\nclass Node {\npublic:\n    int data;\n    Node* next;\n\n    // Default constructor\n    Node()\n    {\n        data = 0;\n        next = NULL;\n    }\n\n    // Parameterised Constructor\n    Node(int data)\n    {\n        this->data = data;\n        this->next = NULL;\n    }\n};\n\n// Linked list class to\n// implement a linked list.\nclass Linkedlist {\n    Node* head;\n\npublic:\n    // Default constructor\n    Linkedlist() { head = NULL; }\n};",
      },
        {
        word: "for",
        response: "(int i=0; i<n; i++)\n{\n\n}",
      },
      {
        word: "//stack",
        response: "\nstack<int> stack;\nstack.push(22);\nstack.push(24);\nint num=0;\nstack.push(num);\nstack.pop();\n\nwhile (!stack.empty()) {\n    cout << stack.top() <<\" \";\n    stack.pop();\n}",
      },
     {
        word: "#",
        response: "include <iostream>\nusing namespace std;\nint main()\n{\nreturn 0;\n}",
      },
      
      
    ];
    
    textArea.addEventListener("input", function (event) {
      const text = event.target.value;
      const cursorIndex = event.target.selectionStart;
      const lastWord = getLastWord(text, cursorIndex);
    
      if (lastWord) {
        const keyword = keywords.find((kw) => kw.word === lastWord);
    
        if (keyword) {
          const completion = keyword.response;
          const updatedText = insertCompletion(text, cursorIndex, completion);
          const updatedCursorIndex = cursorIndex + completion.length;
    
          event.target.value = updatedText;
          event.target.selectionStart = updatedCursorIndex;
          event.target.selectionEnd = updatedCursorIndex;
        }
      }
    });
    
    function getLastWord(text, cursorIndex) {
      const words = text.slice(0, cursorIndex).split(/\s+/);
      return words[words.length - 1];
    }
    
    function insertCompletion(text, cursorIndex, completion) {
      return text.slice(0, cursorIndex) + completion + text.slice(cursorIndex);
    }
    
    const charCountElement = document.getElementById("sub");
    textArea.addEventListener("input", function () {
      const text = textArea.value;
      const charCount = text.length;
      charCountElement.textContent = `${charCount}`; // Display the character count
    });
    /* curser js*/
        document.addEventListener('mousemove', function(event) {
      const cursor = document.querySelector('.custom-cursor');
      cursor.style.top = `${event.pageY}px`;
      cursor.style.left = `${event.pageX}px`;
    });
    
    document.addEventListener('mousedown', function() {
      const cursor = document.querySelector('.custom-cursor');
      cursor.classList.add('active');
    });
    
    document.addEventListener('mouseup', function() {
      const cursor = document.querySelector('.custom-cursor');
      cursor.classList.remove('active');
    });
    
        /* curser js*/
        /* v5 js*/
        function changeGradients(bodyColor, editorColor, div2Color,sub_2_color,countcolor) {
    document.getElementById('end_div_id').style.backgroundImage = bodyColor;
          document.getElementById('textArea').style.backgroundImage = editorColor;
          document.getElementById('right_1').style.backgroundImage = div2Color;
        document.getElementById('sub_2_id').style.backgroundImage = sub_2_color;
        document.getElementById('sub').style.backgroundImage = countcolor;
        }
    
    const swiftUpElements = document.querySelectorAll('.swift-up-text');
    
    swiftUpElements.forEach(elem => {
    
        const words = elem.textContent.split(' ');
        elem.innerHTML = '';
    
        words.forEach((el, index) => {
            words[index] = `<span><i>${words[index]}</i></span>`;
        });
    
        elem.innerHTML = words.join(' ');
    
        const children = document.querySelectorAll('span > i');
        children.forEach((node, index) => {
            node.style.animationDelay = `${index * .2}s`;
        });
    
    });
    
