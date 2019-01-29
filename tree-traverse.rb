#
#  Given a tree such as
#            1
#           / |
#          2  3
#        / |
#       4  5
# Depth First Traversals:
# (a) Inorder (Left, Root, Right) : 4 2 5 1 3
# (b) Preorder (Root, Left, Right) : 1 2 4 5 3
# (c) Postorder (Left, Right, Root) : 4 5 2 3 1
# Breadth First or Level Order Traversal : 1 2 3 4 5
#

class TreeTraversal
  attr_accessor :main_types, :depth_first_types

  @main_types = {
    "breadth-first" => "BREADTH_FIRST",
    "depth-first" => "DEPTH_FIRST",
  }

  @depth_first_types = {
    "inorder" => "INORDER",
    "preorder" => "PREORDER",
    "postorder" => "POSTORDER",
  }

  def initialize(type:, sub_type: nil)
    @type = type
    puts "Tree traverse of type #{@type} #{sub_type ? sub_type : ''}"
  end
end

tt = TreeTraversal.new(type: 'BREADTH_FIRST', sub_type: 'INORDER')
